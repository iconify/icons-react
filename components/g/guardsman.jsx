import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ursflib0p.css';
import '../../css/b/b8-581b4d.css';
import '../../css/d/dw82cab9l.css';
import '../../css/y/ya36t3jpk.css';
import '../../css/e/exaty62xg.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ursflib0p"/><path class="b8-581b4d"/><path class="dw82cab9l"/><path class="ya36t3jpk"/><path class="exaty62xg"/>`,
		"fallback": "fxemoji:guardsman",
	});
}

export default Component;
