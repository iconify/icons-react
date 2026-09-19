import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ah82h4wex.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ah82h4wex"/>`,
		"fallback": "dinkie-icons:hundred-points-symbol",
	});
}

export default Component;
