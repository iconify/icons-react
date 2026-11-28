import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kiqk-gcqq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kiqk-gcqq"/>`,
		"fallback": "noviair:book",
	});
}

export default Component;
