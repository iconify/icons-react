import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tkcm9o7dz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tkcm9o7dz"/>`,
		"fallback": "griddy-icons:hair-dryer",
	});
}

export default Component;
