import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t5ot12pbw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t5ot12pbw"/>`,
		"fallback": "coolicons:circle-chevron-down-round",
	});
}

export default Component;
