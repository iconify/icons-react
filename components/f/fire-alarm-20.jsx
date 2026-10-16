import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/khylky-1c.css';
import '../../css/t/t-6ze0bzb.css';
import '../../css/n/non-6ivtt.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="khylky-1c"/><path class="t-6ze0bzb"/><path class="non-6ivtt"/>`,
		"fallback": "energy-icons:fire-alarm-20",
	});
}

export default Component;
