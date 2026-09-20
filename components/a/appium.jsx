import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nbm41-n1j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nbm41-n1j"/>`,
		"fallback": "simple-icons:appium",
	});
}

export default Component;
