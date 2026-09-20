import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_8dvglkn.css';
import '../../css/k/kwzja8bzb.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t_8dvglkn"/><path class="kwzja8bzb"/>`,
		"fallback": "material-icon-theme:folder-pipe",
	});
}

export default Component;
