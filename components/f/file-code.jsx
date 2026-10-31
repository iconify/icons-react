import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rs2m7nikp.css';
import '../../css/y/yh091swwc.css';
import '../../css/j/jl1nl7vcf.css';
import '../../css/b/bsrn1y21r.css';
import '../../css/z/zma1_lb0e.css';
import '../../css/g/gh_euo0ie.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="rs2m7nikp wm-k"/><path class="wm-deco yh091swwc"/><path class="jl1nl7vcf wm-k"/><path class="bsrn1y21r wm-k"/><path class="wm-shadow zma1_lb0e"/><path class="gh_euo0ie wm-shine"/></g>`,
		"fallback": "withicons-valentine:file-code",
	});
}

export default Component;
