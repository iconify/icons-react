import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wn_mjmb9j.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="wn_mjmb9j"/>`,
		"fallback": "healthicons:blister-pills-round-x14",
	});
}

export default Component;
