import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jmhhpqmkw.css';
import '../../css/b/b0flmi83f.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jmhhpqmkw"/><path class="b0flmi83f"/>`,
		"fallback": "energy-icons:chevrons-right-20-bold",
	});
}

export default Component;
