import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j50aadc2n.css';
import '../../css/z/z_4hbabey.css';
import '../../css/v/vbx6f-fqd.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j50aadc2n"/><path class="z_4hbabey"/><path class="vbx6f-fqd"/>`,
		"fallback": "fxemoji:cjkunifiedideograph-j",
	});
}

export default Component;
