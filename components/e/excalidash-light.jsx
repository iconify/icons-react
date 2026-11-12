import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qvrll1__l.css';
import '../../css/t/tr0pmhbxp.css';
import '../../css/d/d_fb3dbwg.css';
import '../../css/i/i9wuo-33s.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qvrll1__l"/><path class="tr0pmhbxp"/><path class="d_fb3dbwg"/><path class="i9wuo-33s"/>`,
		"fallback": "selfhst:excalidash-light",
	});
}

export default Component;
