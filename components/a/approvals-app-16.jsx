import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/r7ex2vuga.css';
import '../../css/t/t07e-pbvm.css';
import '../../css/o/ol7cejbxg.css';
import '../../css/g/g0pybxe0r.css';
import '../../css/m/mu8f_sb0x.css';
import '../../css/s/sbe0k6bqt.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path fill="url(#SVG7VCfJbxe)" clip-rule="evenodd" class="r7ex2vuga"/><path fill="url(#SVGiW8ElRAW)" clip-rule="evenodd" class="t07e-pbvm"/><defs><linearGradient id="SVG7VCfJbxe" x1="1.554" x2="5.941" y1="1.231" y2="17.422" gradientUnits="userSpaceOnUse"><stop class="ol7cejbxg"/><stop offset="1" class="g0pybxe0r"/></linearGradient><linearGradient id="SVGiW8ElRAW" x1="10.891" x2="4.999" y1="6.555" y2="9.484" gradientUnits="userSpaceOnUse"><stop class="mu8f_sb0x"/><stop offset="1" class="sbe0k6bqt"/></linearGradient></defs></g>`,
		"fallback": "fluent-color:approvals-app-16",
	});
}

export default Component;
