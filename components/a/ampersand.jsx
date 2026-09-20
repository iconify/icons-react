import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ioxrs1epo.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ioxrs1epo"/>`,
		"fallback": "picon:ampersand",
	});
}

export default Component;
