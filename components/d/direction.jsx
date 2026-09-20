import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/q/q16k9wmad.css';
import '../../css/q/qw5la0zkw.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="q16k9wmad"/><path class="qw5la0zkw"/></g>`,
		"fallback": "marketeq:direction",
	});
}

export default Component;
