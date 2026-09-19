import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pzzpj9b5z.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pzzpj9b5z"/>`,
		"fallback": "cib:discord",
	});
}

export default Component;
