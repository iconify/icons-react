import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l45my0bsv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l45my0bsv"/>`,
		"fallback": "noviair:chevron-left",
	});
}

export default Component;
