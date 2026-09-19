import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xbq83e2fr.css';
import '../../css/h/ho8hjnb3u.css';
import '../../css/s/sybk1uw8d.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xbq83e2fr"/><path class="ho8hjnb3u"/><path class="sybk1uw8d"/>`,
		"fallback": "fxemoji:dolphin",
	});
}

export default Component;
