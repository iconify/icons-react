import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/al26zt.css';
import '../../css/a/a0m25c.css';
import '../../css/t/te6v-x.css';
import '../../css/z/z4421m.css';
import '../../css/q/qfvpsi.css';
import '../../css/f/fill-to-1.css';
import '../../css/s/so-from-64.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="al26zt"/><path class="a0m25c te6v-x"/><path class="a0m25c z4421m"/><path class="a0m25c qfvpsi"/>`,
		"fallback": "line-md:email-opened-multiple-filled",
	});
}

export default Component;
