import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c5nn_nvzj.css';
import '../../css/y/yrrvfsjve.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c5nn_nvzj"/><path class="yrrvfsjve"/>`,
		"fallback": "energy-icons:heart-crack-48-bold",
	});
}

export default Component;
