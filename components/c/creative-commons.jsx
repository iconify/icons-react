import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hieikacsf.css';
import '../../css/d/dp-b6abae.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hieikacsf"/><path class="dp-b6abae"/>`,
		"fallback": "bxl:creative-commons",
	});
}

export default Component;
