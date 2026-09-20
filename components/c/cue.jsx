import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vz_zt233x.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vz_zt233x"/>`,
		"fallback": "material-icon-theme:cue",
	});
}

export default Component;
