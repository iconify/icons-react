import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tih_i84ou.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tih_i84ou"/>`,
		"fallback": "noviair:hotel",
	});
}

export default Component;
