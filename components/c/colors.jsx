import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xnrni5tmz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xnrni5tmz"/>`,
		"fallback": "griddy-icons:colors",
	});
}

export default Component;
