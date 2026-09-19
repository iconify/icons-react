import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/c/cpccgt37i.css';
import '../../css/f/fl_fxsbny.css';
import '../../css/l/l77ysscqo.css';
import '../../css/w/wonfncg2h.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="wwvp95byt"><path class="cpccgt37i"/><path class="fl_fxsbny"/><path class="l77ysscqo"/><path class="wonfncg2h"/></g>`,
		"fallback": "glyphs-poly:hash",
	});
}

export default Component;
