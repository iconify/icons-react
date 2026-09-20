import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tvi020bcf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="tvi020bcf"/>`,
		"fallback": "streamline-sharp:database-solid",
	});
}

export default Component;
