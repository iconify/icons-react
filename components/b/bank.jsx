import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/x95w1rb9g.css';
import '../../css/u/urnnc7wwi.css';
import '../../css/k/kxkb0s7qz.css';
import '../../css/k/kq0ax_oxi.css';
import '../../css/s/sx7izqbra.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="x95w1rb9g"/><path class="urnnc7wwi"/><path class="kxkb0s7qz"/><path class="kq0ax_oxi"/><path class="sx7izqbra"/></g>`,
		"fallback": "fluent-emoji-flat:bank",
	});
}

export default Component;
