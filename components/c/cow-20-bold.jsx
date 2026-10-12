import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gli25bb3i.css';
import '../../css/j/jpkklnhzv.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gli25bb3i"/><path class="jpkklnhzv"/>`,
		"fallback": "energy-icons:cow-20-bold",
	});
}

export default Component;
