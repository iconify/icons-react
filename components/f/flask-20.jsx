import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kvlujqvom.css';
import '../../css/o/o6vqyfbqf.css';
import '../../css/t/tks4l1bml.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kvlujqvom"/><path class="o6vqyfbqf"/><path class="tks4l1bml"/>`,
		"fallback": "energy-icons:flask-20",
	});
}

export default Component;
