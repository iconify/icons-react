import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/szahujb-p.css';
import '../../css/m/mc4ucsbxd.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="szahujb-p"/><path class="mc4ucsbxd"/>`,
		"fallback": "energy-icons:file-video-20",
	});
}

export default Component;
