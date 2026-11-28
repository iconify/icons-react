import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oadu9_skn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oadu9_skn"/>`,
		"fallback": "noviair-light:club",
	});
}

export default Component;
