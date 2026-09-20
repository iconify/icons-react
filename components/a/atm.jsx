import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ekdg5ur0t.css';
import '../../css/y/yor81gb5d.css';
import '../../css/u/u4_g3v0-k.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ekdg5ur0t"/><ellipse class="yor81gb5d"/><path class="u4_g3v0-k"/>`,
		"fallback": "map:atm",
	});
}

export default Component;
