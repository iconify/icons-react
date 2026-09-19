import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/h6l7y_btx.css';
import '../../css/i/iuk1pacbe.css';
import '../../css/f/fjq20bbkm.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="h6l7y_btx"/><path class="iuk1pacbe"/><path class="fjq20bbkm"/></g>`,
		"fallback": "glyphs:folder-1-duo",
	});
}

export default Component;
