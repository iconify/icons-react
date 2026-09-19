import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/g3fz5ybsb.css';
import '../../css/v/vnhubhthd.css';
import '../../css/f/fkas6vb7y.css';
import '../../css/v/vek4heose.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="g3fz5ybsb"/><path class="vnhubhthd"/><path class="fkas6vb7y"/><path class="vek4heose"/></g>`,
		"fallback": "glyphs-poly:anchor",
	});
}

export default Component;
