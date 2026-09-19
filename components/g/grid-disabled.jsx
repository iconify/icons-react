import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wu23hiv_r.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wu23hiv_r"/>`,
		"fallback": "dinkie-icons:grid-disabled",
	});
}

export default Component;
