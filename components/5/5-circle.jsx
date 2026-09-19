import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/ziw_0absk.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ziw_0absk"/>`,
		"fallback": "bi:5-circle",
	});
}

export default Component;
