import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l273n2buk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l273n2buk"/>`,
		"fallback": "coolicons:clock-2-round",
	});
}

export default Component;
