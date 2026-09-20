import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bkaq4tblo.css';
import '../../css/p/pny223f3z.css';
import '../../css/s/smdysmmqk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="bkaq4tblo"/><path class="pny223f3z"/><path class="smdysmmqk"/></g>`,
		"fallback": "reicon:image-depth",
	});
}

export default Component;
