import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mfjdz5bhe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mfjdz5bhe"/>`,
		"fallback": "noviair:hotel-star",
	});
}

export default Component;
