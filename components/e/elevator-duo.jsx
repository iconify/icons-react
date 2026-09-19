import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f12n77b0y.css';
import '../../css/i/igl--8b1c.css';
import '../../css/g/g63pph37i.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="f12n77b0y"/><path class="igl--8b1c"/><path class="g63pph37i"/></g>`,
		"fallback": "glyphs:elevator-duo",
	});
}

export default Component;
