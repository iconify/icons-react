import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u85ln7bqz.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u85ln7bqz"/>`,
		"fallback": "temaki:cooling-tower-radiation",
	});
}

export default Component;
