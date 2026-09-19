import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f021dkz6d.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="f021dkz6d"/>`,
		"fallback": "gravity-ui:bold",
	});
}

export default Component;
