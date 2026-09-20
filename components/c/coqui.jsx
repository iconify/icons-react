import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z_dnl3bgj.css';
import '../../css/o/ote0d1bdp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z_dnl3bgj"/><path class="ote0d1bdp"/>`,
		"fallback": "thesvg-color:coqui",
	});
}

export default Component;
