import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c0oa-qzdz.css';
import '../../css/r/rji5c601e.css';
import '../../css/t/ttfadacqv.css';
import '../../css/n/n3c3iru4h.css';
import '../../css/g/gmq7wzbph.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c0oa-qzdz"/><path class="rji5c601e"/><path class="ttfadacqv"/><path class="n3c3iru4h"/><path class="gmq7wzbph"/>`,
		"fallback": "energy-icons:accessibility-20-bold",
	});
}

export default Component;
