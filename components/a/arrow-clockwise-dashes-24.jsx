import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/c3tebhbgp.css';
import '../../css/o/ol7cejbxg.css';
import '../../css/g/g0pybxe0r.css';
import '../../css/v/v7_qb8j7z.css';
import '../../css/d/dd__tcyya.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path fill="url(#SVGEyWEZbkY)" class="c3tebhbgp"/><path fill="url(#SVG6KQYtczG)" class="c3tebhbgp"/><defs><linearGradient id="SVGEyWEZbkY" x1="5.536" x2="21.03" y1="3" y2="26.625" gradientUnits="userSpaceOnUse"><stop class="ol7cejbxg"/><stop offset=".923" class="g0pybxe0r"/></linearGradient><linearGradient id="SVG6KQYtczG" x1="11.975" x2="16.036" y1=".857" y2="31.286" gradientUnits="userSpaceOnUse"><stop class="v7_qb8j7z"/><stop offset="1" class="dd__tcyya"/></linearGradient></defs></g>`,
		"fallback": "fluent-color:arrow-clockwise-dashes-24",
	});
}

export default Component;
