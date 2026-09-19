import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fhlfeibkt.css';
import '../../css/h/hdz29maug.css';
import '../../css/f/f6irx0b1a.css';
import '../../css/g/geztdhi9y.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="fhlfeibkt"/><path class="hdz29maug"/><path class="f6irx0b1a"/><path class="geztdhi9y"/></g>`,
		"fallback": "glyphs:eye-duo",
	});
}

export default Component;
