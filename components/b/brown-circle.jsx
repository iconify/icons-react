import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ika2pmy3d.css';
import '../../css/s/snpiwsb_l.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="ika2pmy3d"/><circle class="snpiwsb_l"/>`,
		"fallback": "openmoji:brown-circle",
	});
}

export default Component;
