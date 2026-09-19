import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vbriv1mcf.css';
import '../../css/x/xahsavp3d.css';
import '../../css/z/z_9naomrb.css';
import '../../css/n/n1-j0_bve.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="vbriv1mcf"/><path clip-rule="evenodd" class="xahsavp3d"/><path clip-rule="evenodd" class="z_9naomrb"/><path class="n1-j0_bve"/></g>`,
		"fallback": "glyphs-poly:chart-bar",
	});
}

export default Component;
