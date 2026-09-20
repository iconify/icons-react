import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yza2zs_of.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="yza2zs_of"/>`,
		"fallback": "pajamas:expire",
	});
}

export default Component;
