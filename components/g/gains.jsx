import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w0dmwob8v.css';
import '../../css/k/k03e-mbxb.css';
import '../../css/p/pt9n8d3fl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w0dmwob8v"/><path class="k03e-mbxb"/><path class="pt9n8d3fl"/>`,
		"fallback": "token:gains",
	});
}

export default Component;
