import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hcn4mte4i.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hcn4mte4i"/>`,
		"fallback": "selfhst:frappe-framework-dark",
	});
}

export default Component;
