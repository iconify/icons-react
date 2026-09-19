import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dpmh8ibkz.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dpmh8ibkz"/>`,
		"fallback": "f7:arrow-up-arrow-down",
	});
}

export default Component;
