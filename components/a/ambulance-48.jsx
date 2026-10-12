import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ohs7hsjpb.css';
import '../../css/s/sdzy7xbyh.css';
import '../../css/x/xn0bb9b4d.css';
import '../../css/y/y97xnkbid.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ohs7hsjpb"/><path class="sdzy7xbyh"/><path class="xn0bb9b4d"/><path class="y97xnkbid"/>`,
		"fallback": "energy-icons:ambulance-48",
	});
}

export default Component;
