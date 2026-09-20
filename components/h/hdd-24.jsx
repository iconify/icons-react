import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u-sr4acye.css';
import '../../css/s/slj16rbhg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u-sr4acye"/><path clip-rule="evenodd" class="slj16rbhg"/>`,
		"fallback": "qlementine-icons:hdd-24",
	});
}

export default Component;
