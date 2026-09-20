import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eie4bs6wv.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eie4bs6wv"/>`,
		"fallback": "rivet-icons:caution-solid",
	});
}

export default Component;
