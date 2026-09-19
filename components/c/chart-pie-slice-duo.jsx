import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/olkw-5b-j.css';
import '../../css/q/qhjzwr93d.css';
import '../../css/z/zeamq4byn.css';
import '../../css/s/shom5xbjc.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="olkw-5b-j"/><path class="qhjzwr93d"/><path class="zeamq4byn"/><path class="shom5xbjc"/></g>`,
		"fallback": "glyphs:chart-pie-slice-duo",
	});
}

export default Component;
