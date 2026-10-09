import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kwup6hyfp.css';
import '../../css/k/k6p64wbai.css';
import '../../css/h/hik87rbbm.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kwup6hyfp"/><path class="k6p64wbai"/><path class="hik87rbbm"/>`,
		"fallback": "energy-icons:cloud-alert-20",
	});
}

export default Component;
