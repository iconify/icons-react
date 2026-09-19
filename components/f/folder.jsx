import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/k/k56zh769s.css';
import '../../css/u/um227vekh.css';
import '../../css/t/tm9f74uep.css';
import '../../css/j/j2m8g8spq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="k56zh769s"/><path class="um227vekh"/><circle class="tm9f74uep"/><path class="j2m8g8spq"/></g>`,
		"fallback": "icon-park-outline:folder",
	});
}

export default Component;
