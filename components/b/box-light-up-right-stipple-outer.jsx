import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qmiclo8zs.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qmiclo8zs"/>`,
		"fallback": "memory:box-light-up-right-stipple-outer",
	});
}

export default Component;
