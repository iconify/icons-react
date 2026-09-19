import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/coz3-p-uf.css';
import '../../css/v/v4gtsac9j.css';
import '../../css/q/q9hf28bpn.css';
import '../../css/k/kiz591b_t.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="coz3-p-uf"/><path class="v4gtsac9j"/><path class="q9hf28bpn"/><rect class="kiz591b_t"/></g>`,
		"fallback": "glyphs-poly:hard-drive",
	});
}

export default Component;
