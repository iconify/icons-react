import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/n/n0g6jmbfy.css';
import '../../css/d/d_ofrbb7y.css';
import '../../css/p/pfnt1nf9l.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="n0g6jmbfy"/><path class="d_ofrbb7y"/><path class="pfnt1nf9l"/></g>`,
		"fallback": "marketeq:forklift",
	});
}

export default Component;
