import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ljc6226xi.css';
import '../../css/u/uqoy3wbla.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ljc6226xi"/><path class="uqoy3wbla"/>`,
		"fallback": "selfhst:frappe-lending",
	});
}

export default Component;
