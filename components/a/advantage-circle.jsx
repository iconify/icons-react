import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/egtos6b2x.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="egtos6b2x"/>`,
		"fallback": "dinkie-icons:advantage-circle",
	});
}

export default Component;
