import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uawrme4my.css';

const viewBox = {"width":24.9,"height":34.2};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uawrme4my"/>`,
		"fallback": "thesvg-color:fivetran",
	});
}

export default Component;
