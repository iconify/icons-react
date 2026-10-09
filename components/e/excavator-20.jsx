import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pghkivbqq.css';
import '../../css/n/n_12w22lk.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pghkivbqq"/><path class="n_12w22lk"/>`,
		"fallback": "energy-icons:excavator-20",
	});
}

export default Component;
