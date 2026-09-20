import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_ezh736y.css';
import '../../css/y/yz98lj7hu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t_ezh736y"/><path class="yz98lj7hu"/>`,
		"fallback": "stash:cloud-minus-light",
	});
}

export default Component;
