import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nqnp4cb9p.css';
import '../../css/q/q0c7o4bad.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<ellipse class="nqnp4cb9p"/><circle class="q0c7o4bad"/>`,
		"fallback": "garden:decimal-stroke-12",
	});
}

export default Component;
