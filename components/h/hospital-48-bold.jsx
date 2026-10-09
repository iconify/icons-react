import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dl-eb8nlu.css';
import '../../css/f/fllxkcc6v.css';
import '../../css/p/pe3l-_bzx.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dl-eb8nlu"/><path class="fllxkcc6v"/><path class="pe3l-_bzx"/>`,
		"fallback": "energy-icons:hospital-48-bold",
	});
}

export default Component;
