import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pi1hn-gpe.css';
import '../../css/q/qln6u-bog.css';
import '../../css/n/n02nodbdf.css';
import '../../css/o/okxkqqbnp.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pi1hn-gpe"/><path class="qln6u-bog"/><path class="n02nodbdf"/><path class="okxkqqbnp"/>`,
		"fallback": "energy-icons:ev-charger-20-bold",
	});
}

export default Component;
