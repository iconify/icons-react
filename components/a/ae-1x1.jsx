import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hu9s20i9j.css';
import '../../css/a/aw9rmcz9o.css';
import '../../css/z/zaosl5byf.css';
import '../../css/v/v-r7s_bat.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hu9s20i9j"/><path class="aw9rmcz9o"/><path class="zaosl5byf"/><path class="v-r7s_bat"/>`,
		"fallback": "flag:ae-1x1",
	});
}

export default Component;
