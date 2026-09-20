import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eyjxv0bpz.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eyjxv0bpz"/>`,
		"fallback": "qlementine-icons:banjo-16",
	});
}

export default Component;
