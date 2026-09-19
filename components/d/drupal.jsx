import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ef3cp9bso.css';

const viewBox = {"width":1536,"height":1792};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ef3cp9bso"/>`,
		"fallback": "fa:drupal",
	});
}

export default Component;
