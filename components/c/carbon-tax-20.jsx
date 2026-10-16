import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rjnt2fbgz.css';
import '../../css/x/xinwgk1sj.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rjnt2fbgz"/><path class="xinwgk1sj"/>`,
		"fallback": "energy-icons:carbon-tax-20",
	});
}

export default Component;
