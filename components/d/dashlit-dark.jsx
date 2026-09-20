import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x8lgnibzz.css';
import '../../css/j/jfosg0bxd.css';
import '../../css/e/efezv2rtc.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x8lgnibzz"/><path class="jfosg0bxd"/><path class="efezv2rtc"/>`,
		"fallback": "selfhst:dashlit-dark",
	});
}

export default Component;
