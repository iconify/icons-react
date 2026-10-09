import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qu1cxf05y.css';
import '../../css/w/w1th29omc.css';
import '../../css/n/n02nodbdf.css';
import '../../css/d/dj13czevu.css';
import '../../css/y/ypnuqpbcd.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qu1cxf05y"/><path class="w1th29omc"/><path class="n02nodbdf"/><path class="dj13czevu"/><path class="ypnuqpbcd"/>`,
		"fallback": "energy-icons:ev-charger-alert-20-bold",
	});
}

export default Component;
