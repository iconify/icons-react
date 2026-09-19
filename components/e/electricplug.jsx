import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sbvjs_2tm.css';
import '../../css/s/s_phngbxd.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sbvjs_2tm"/><path class="s_phngbxd"/>`,
		"fallback": "fxemoji:electricplug",
	});
}

export default Component;
