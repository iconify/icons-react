import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/efiimf6-i.css';
import '../../css/o/oioyh58qn.css';
import '../../css/t/t2b5ptbsb.css';
import '../../css/f/ft5gu85-b.css';
import '../../css/c/cuyftmbhm.css';
import '../../css/a/a9cpe0bdt.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="efiimf6-i"/><path class="oioyh58qn"/><path class="t2b5ptbsb"/><path class="ft5gu85-b"/><path class="cuyftmbhm"/><path class="a9cpe0bdt"/></g>`,
		"fallback": "glyphs:aperture-duo",
	});
}

export default Component;
