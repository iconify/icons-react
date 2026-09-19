import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/idcy0_bjv.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="idcy0_bjv"/>`,
		"fallback": "f7:doc-text-search",
	});
}

export default Component;
