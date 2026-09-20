import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hhirkpb2v.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hhirkpb2v"/>`,
		"fallback": "radix-icons:external-link",
	});
}

export default Component;
