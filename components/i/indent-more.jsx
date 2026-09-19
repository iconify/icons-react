import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b3j61h5fu.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b3j61h5fu"/>`,
		"fallback": "foundation:indent-more",
	});
}

export default Component;
