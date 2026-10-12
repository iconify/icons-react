import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uoams9w2x.css';
import '../../css/t/tnqh3bc1r.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uoams9w2x"/><path class="tnqh3bc1r"/>`,
		"fallback": "energy-icons:banknote-20",
	});
}

export default Component;
