import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0m25c.css';
import '../../css/x/x5ao8m.css';
import '../../css/w/w4pkou.css';
import '../../css/g/ge04hr.css';
import '../../css/k/k4fugd.css';
import '../../css/p/pi14pi.css';
import '../../css/s/so-from-4.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a0m25c x5ao8m"/><path class="a0m25c w4pkou"/><path class="a0m25c ge04hr"/><path class="a0m25c k4fugd"/><path class="a0m25c pi14pi"/>`,
		"fallback": "line-md:bell-alert",
	});
}

export default Component;
