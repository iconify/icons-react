import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h68nt64um.css';
import '../../css/h/h2gpnpb6w.css';
import '../../css/w/wweom8b5r.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h68nt64um"/><path class="h2gpnpb6w"/><path class="wweom8b5r"/>`,
		"fallback": "energy-icons:folder-lock-48",
	});
}

export default Component;
