import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uhyge19vm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uhyge19vm"/>`,
		"fallback": "uil:adjust-circle",
	});
}

export default Component;
