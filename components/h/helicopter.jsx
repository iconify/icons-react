import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n_rf9oqak.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n_rf9oqak"/>`,
		"fallback": "dinkie-icons:helicopter",
	});
}

export default Component;
