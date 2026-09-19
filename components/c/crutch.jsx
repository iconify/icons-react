import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sn-3s1buo.css';
import '../../css/n/n9a9kbbjh.css';
import '../../css/x/xpw5-obmc.css';
import '../../css/l/l28ezqbrz.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="sn-3s1buo"/><path class="n9a9kbbjh"/><path class="xpw5-obmc"/><path class="l28ezqbrz"/></g>`,
		"fallback": "fluent-emoji-flat:crutch",
	});
}

export default Component;
