import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zytq18bhk.css';
import '../../css/r/rr_k4sqig.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="zytq18bhk"/><path class="rr_k4sqig"/></g>`,
		"fallback": "lucide-extended:between-vertical-start-duotone",
	});
}

export default Component;
