import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lz-65_bag.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lz-65_bag"/>`,
		"fallback": "dinkie-icons:grid-enabled",
	});
}

export default Component;
