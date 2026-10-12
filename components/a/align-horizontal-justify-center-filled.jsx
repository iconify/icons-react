import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zngg8jbuz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zngg8jbuz"/>`,
		"fallback": "lucide-extended:align-horizontal-justify-center-filled",
	});
}

export default Component;
