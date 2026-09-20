import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ez5k8sbka.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ez5k8sbka"/>`,
		"fallback": "pixel:command",
	});
}

export default Component;
