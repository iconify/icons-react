import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/urkx-c35c.css';
import '../../css/k/kwzja8bzb.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="urkx-c35c"/><path class="kwzja8bzb"/>`,
		"fallback": "material-icon-theme:folder-pipe-open",
	});
}

export default Component;
