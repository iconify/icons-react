import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dvg-drbfm.css';
import '../../css/v/vx3fhbbqc.css';
import '../../css/k/kjepdxb8e.css';
import '../../css/j/jthdzbbfe.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dvg-drbfm"/><path class="vx3fhbbqc"/><path class="kjepdxb8e"/><path class="jthdzbbfe"/>`,
		"fallback": "energy-icons:api-key-20-bold",
	});
}

export default Component;
