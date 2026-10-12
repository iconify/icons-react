import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qklghdczf.css';
import '../../css/o/olpeleb8t.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qklghdczf"/><path class="olpeleb8t"/>`,
		"fallback": "energy-icons:acorn-20",
	});
}

export default Component;
