import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hqn6nb3sk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hqn6nb3sk"/>`,
		"fallback": "noviair-light:file-text-refresh",
	});
}

export default Component;
