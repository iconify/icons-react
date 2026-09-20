import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/b/bm5ekcrdj.css';
import '../../css/f/f9psy-bkt.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="bm5ekcrdj"/><path class="f9psy-bkt"/></g>`,
		"fallback": "marketeq:double-down-sign",
	});
}

export default Component;
