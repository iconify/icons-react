import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/he3ym7_zj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="he3ym7_zj"/>`,
		"fallback": "lucide-lab:crosshair-square",
	});
}

export default Component;
