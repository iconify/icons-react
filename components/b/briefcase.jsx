import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fzxgg3dtt.css';
import '../../css/d/dy2uamv8o.css';
import '../../css/o/ofo22jbod.css';
import '../../css/r/raxzqdjnu.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="fzxgg3dtt"/><path clip-rule="evenodd" class="dy2uamv8o"/><path clip-rule="evenodd" class="ofo22jbod"/><path class="raxzqdjnu"/></g>`,
		"fallback": "glyphs-poly:briefcase",
	});
}

export default Component;
