import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hltdeigko.css';
import '../../css/h/h5clszohm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hltdeigko"/><path clip-rule="evenodd" class="h5clszohm"/>`,
		"fallback": "solar:city-bold",
	});
}

export default Component;
