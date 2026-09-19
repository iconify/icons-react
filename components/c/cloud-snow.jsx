import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/s/s8hk-jgap.css';
import '../../css/n/n12bzw5ze.css';
import '../../css/w/wm6aqcszc.css';
import '../../css/b/bdanq3ahw.css';
import '../../css/g/gdwzgjb5s.css';

const viewBox = {"width":17,"height":17};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g transform="translate(1 3)" class="n1lsf0bnc"><path class="s8hk-jgap"/><circle class="n12bzw5ze"/><circle class="wm6aqcszc"/><circle class="bdanq3ahw"/><circle class="gdwzgjb5s"/></g>`,
		"fallback": "si-glyph:cloud-snow",
	});
}

export default Component;
