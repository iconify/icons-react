import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yqa_88bvw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yqa_88bvw"/>`,
		"fallback": "keyline-icons:face-neutral",
	});
}

export default Component;
