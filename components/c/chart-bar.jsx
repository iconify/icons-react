import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mt-pin3gu.css';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p_3zmsvya.css';
import '../../css/b/bw2p-ubhh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><path id="SVGvfUnedaT" class="mt-pin3gu"/></defs><g class="ft5dv1b6b"><use href="#SVGvfUnedaT"/><use href="#SVGvfUnedaT" class="p_3zmsvya"/><path class="bw2p-ubhh"/></g>`,
		"fallback": "tdesign:chart-bar",
	});
}

export default Component;
