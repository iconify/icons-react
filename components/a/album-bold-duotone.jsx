import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/t6gsaib6o.css';
import '../../css/s/s3t8_gbhj.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/w/w9-67fbcg.css';
import '../../css/n/nariwduko.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="t6gsaib6o"/><path clip-rule="evenodd" class="s3t8_gbhj"/><g class="mc2zb0bvp"><path class="w9-67fbcg"/><path class="nariwduko"/></g></g>`,
		"fallback": "solar:album-bold-duotone",
	});
}

export default Component;
