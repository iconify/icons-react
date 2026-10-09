import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/njicu-b5r.css';
import '../../css/i/i2ndmodxq.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="njicu-b5r"/><path class="i2ndmodxq"/>`,
		"fallback": "energy-icons:frame-20",
	});
}

export default Component;
