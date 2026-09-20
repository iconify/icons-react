import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h45zs_cpn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h45zs_cpn"/>`,
		"fallback": "tdesign:circle-filled",
	});
}

export default Component;
