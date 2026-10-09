import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kps71gbrs.css';
import '../../css/z/zy_kdc0ur.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kps71gbrs"/><path class="zy_kdc0ur"/>`,
		"fallback": "energy-icons:cheese-20",
	});
}

export default Component;
