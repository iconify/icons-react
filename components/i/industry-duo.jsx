import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hltyj8b6l.css';
import '../../css/c/ctk3_x4ut.css';
import '../../css/i/iq3e-sygp.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="hltyj8b6l"/><path class="ctk3_x4ut"/><path class="iq3e-sygp"/></g>`,
		"fallback": "glyphs:industry-duo",
	});
}

export default Component;
