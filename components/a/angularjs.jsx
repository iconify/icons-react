import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p3tp0ef-m.css';

const viewBox = {"width":22,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p3tp0ef-m"/>`,
		"fallback": "fontisto:angularjs",
	});
}

export default Component;
