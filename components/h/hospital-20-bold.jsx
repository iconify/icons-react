import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qrrp2vb9e.css';
import '../../css/i/iaidsl54n.css';
import '../../css/g/gvfs-1b3m.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qrrp2vb9e"/><path class="iaidsl54n"/><path class="gvfs-1b3m"/>`,
		"fallback": "energy-icons:hospital-20-bold",
	});
}

export default Component;
