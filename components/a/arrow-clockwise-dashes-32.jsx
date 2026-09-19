import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/spv0tlbmv.css';
import '../../css/o/ol7cejbxg.css';
import '../../css/g/g0pybxe0r.css';
import '../../css/v/v7_qb8j7z.css';
import '../../css/d/dd__tcyya.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path fill="url(#SVG7jJZ2dhm)" class="spv0tlbmv"/><path fill="url(#SVG3sEUZcka)" class="spv0tlbmv"/><defs><linearGradient id="SVG7jJZ2dhm" x1="6.665" x2="29.061" y1="3" y2="37.125" gradientUnits="userSpaceOnUse"><stop class="ol7cejbxg"/><stop offset=".923" class="g0pybxe0r"/></linearGradient><linearGradient id="SVG3sEUZcka" x1="15.973" x2="21.842" y1="-.095" y2="43.857" gradientUnits="userSpaceOnUse"><stop class="v7_qb8j7z"/><stop offset="1" class="dd__tcyya"/></linearGradient></defs></g>`,
		"fallback": "fluent-color:arrow-clockwise-dashes-32",
	});
}

export default Component;
