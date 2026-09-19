import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vatmurbwg.css';
import '../../css/k/kkemslb3s.css';
import '../../css/c/cwsvb_vrl.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="vatmurbwg"/><path clip-rule="evenodd" class="kkemslb3s"/><path class="cwsvb_vrl"/></g>`,
		"fallback": "glyphs:box-layout-duo",
	});
}

export default Component;
