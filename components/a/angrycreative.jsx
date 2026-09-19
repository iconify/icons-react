import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w8yq56beu.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w8yq56beu"/>`,
		"fallback": "fa-brands:angrycreative",
	});
}

export default Component;
