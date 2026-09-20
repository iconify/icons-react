import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mdmrrv5yo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mdmrrv5yo"/>`,
		"fallback": "mdi:hammer-sickle",
	});
}

export default Component;
