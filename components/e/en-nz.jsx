import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bc1fd0lxe.css';
import '../../css/d/d1pfnyb3d.css';
import '../../css/k/kbz3x4y6z.css';
import '../../css/f/f0f4zv9ev.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="SVGqdEcMdXs"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGqdEcMdXs)"><path class="d1pfnyb3d"/><path class="kbz3x4y6z"/><path class="f0f4zv9ev"/></g>`,
		"fallback": "circle-flags:en-nz",
	});
}

export default Component;
