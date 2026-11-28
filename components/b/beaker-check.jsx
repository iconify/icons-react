import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/okd59c11y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="okd59c11y"/>`,
		"fallback": "noviair-light:beaker-check",
	});
}

export default Component;
