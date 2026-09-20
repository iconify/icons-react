import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/l/l7ufv987b.css';
import '../../css/b/bsqohrlia.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="l7ufv987b"/><path class="bsqohrlia"/></g>`,
		"fallback": "marketeq:download-alt-5",
	});
}

export default Component;
