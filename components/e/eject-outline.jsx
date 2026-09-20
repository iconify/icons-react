import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jqldz6btv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jqldz6btv"/>`,
		"fallback": "typcn:eject-outline",
	});
}

export default Component;
