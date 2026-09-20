import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tqee7sb9p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="tqee7sb9p"/>`,
		"fallback": "streamline-sharp:arrow-transfer-horizontal-large-1-solid",
	});
}

export default Component;
