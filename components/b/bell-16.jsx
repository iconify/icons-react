import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g23khybbp.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g23khybbp"/>`,
		"fallback": "octicon:bell-16",
	});
}

export default Component;
