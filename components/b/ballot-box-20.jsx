import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/smusfyo3e.css';
import '../../css/g/gc1ce0bgt.css';
import '../../css/o/oexyxwbsr.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="smusfyo3e"/><path class="gc1ce0bgt"/><path class="oexyxwbsr"/>`,
		"fallback": "energy-icons:ballot-box-20",
	});
}

export default Component;
