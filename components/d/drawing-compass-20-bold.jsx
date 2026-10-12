import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rill5m66m.css';
import '../../css/e/ei2u0fbjq.css';
import '../../css/h/hf9qlabiz.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rill5m66m"/><path class="ei2u0fbjq"/><path class="hf9qlabiz"/>`,
		"fallback": "energy-icons:drawing-compass-20-bold",
	});
}

export default Component;
