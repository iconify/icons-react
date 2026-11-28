import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v-hg_2b3d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v-hg_2b3d"/>`,
		"fallback": "noviair-light:eye-x",
	});
}

export default Component;
