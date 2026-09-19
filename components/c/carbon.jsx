import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h2fxoablb.css';
import '../../css/m/mru10lbki.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h2fxoablb"/><path class="mru10lbki"/>`,
		"fallback": "carbon:carbon",
	});
}

export default Component;
