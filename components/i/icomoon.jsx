import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kazgz6b7y.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kazgz6b7y"/>`,
		"fallback": "icomoon-free:icomoon",
	});
}

export default Component;
