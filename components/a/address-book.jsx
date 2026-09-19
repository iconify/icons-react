import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q-20n0bue.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q-20n0bue"/>`,
		"fallback": "fa-regular:address-book",
	});
}

export default Component;
