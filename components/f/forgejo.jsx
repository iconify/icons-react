import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f9ma__bqh.css';
import '../../css/t/td4gnzb6z.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f9ma__bqh"/><path class="td4gnzb6z"/>`,
		"fallback": "devicon:forgejo",
	});
}

export default Component;
