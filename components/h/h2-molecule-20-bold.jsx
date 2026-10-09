import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ojx85m3io.css';
import '../../css/l/lj2fxh0vl.css';
import '../../css/z/z82nuqbtt.css';
import '../../css/h/htv6lo28z.css';
import '../../css/t/tw5-e4kyi.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ojx85m3io"/><path class="lj2fxh0vl"/><path class="z82nuqbtt"/><path class="htv6lo28z"/><path class="tw5-e4kyi"/>`,
		"fallback": "energy-icons:h2-molecule-20-bold",
	});
}

export default Component;
