import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y-8dv_bqb.css';

const viewBox = {"width":960,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y-8dv_bqb"/>`,
		"fallback": "whh:beeralt",
	});
}

export default Component;
