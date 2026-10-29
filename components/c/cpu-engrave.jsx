import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/i/i8s8sughv.css';
import '../../css/u/umh3pebfp.css';
import '../../css/v/vjsd4sbgq.css';
import '../../css/k/kx9parvdn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="i8s8sughv wm-k"/><path class="umh3pebfp wm-shadow"/><path class="vjsd4sbgq wm-k"/><path class="kx9parvdn wm-a"/></g>`,
		"fallback": "withicons:cpu-engrave",
	});
}

export default Component;
