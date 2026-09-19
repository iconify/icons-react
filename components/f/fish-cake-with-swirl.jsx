import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fzytrac1b.css';
import '../../css/v/vhe9-_bwb.css';
import '../../css/n/n0_qqkb0r.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="fzytrac1b"/><path class="vhe9-_bwb"/><path class="n0_qqkb0r"/></g>`,
		"fallback": "fluent-emoji-flat:fish-cake-with-swirl",
	});
}

export default Component;
