import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n2neunb3u.css';
import '../../css/y/ylciz6x-b.css';
import '../../css/s/s6ko3xcua.css';
import '../../css/p/pml7bcbbm.css';
import '../../css/t/t79v3gblr.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n2neunb3u"/><path class="ylciz6x-b"/><path class="s6ko3xcua"/><path class="pml7bcbbm"/><path class="t79v3gblr"/>`,
		"fallback": "energy-icons:accessibility-48-bold",
	});
}

export default Component;
