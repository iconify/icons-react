import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/n/nveddgbsj.css';
import '../../css/l/l7hmq3vqy.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="nveddgbsj"/><path class="l7hmq3vqy"/></g>`,
		"fallback": "marketeq:fast-forward",
	});
}

export default Component;
