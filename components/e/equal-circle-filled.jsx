import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pmzh3rb-p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pmzh3rb-p"/>`,
		"fallback": "boxicons:equal-circle-filled",
	});
}

export default Component;
