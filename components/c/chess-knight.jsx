import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tzxwkabxm.css';
import '../../css/b/b4i6hrb5r.css';
import '../../css/q/q6hlrulne.css';
import '../../css/q/q6e26kbmb.css';
import '../../css/i/ip-mhcnpg.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="tzxwkabxm"/><path class="b4i6hrb5r"/><path class="q6hlrulne"/><path class="q6e26kbmb"/><path class="ip-mhcnpg"/></g>`,
		"fallback": "streamline-color:chess-knight",
	});
}

export default Component;
