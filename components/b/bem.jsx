import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xl98s_yso.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xl98s_yso"/>`,
		"fallback": "simple-icons:bem",
	});
}

export default Component;
