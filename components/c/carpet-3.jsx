import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/b/b0s2_3bwe.css';
import '../../css/w/wwati2bae.css';
import '../../css/l/liklveb_t.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="b0s2_3bwe"/><path class="wwati2bae"/><path class="liklveb_t"/></g>`,
		"fallback": "marketeq:carpet-3",
	});
}

export default Component;
