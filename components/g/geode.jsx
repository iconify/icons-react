import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cme8g-blb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cme8g-blb"/>`,
		"fallback": "thesvg-color:geode",
	});
}

export default Component;
