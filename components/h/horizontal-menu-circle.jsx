import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/b/bsh15bben.css';
import '../../css/h/htp0g1v4z.css';
import '../../css/n/nfm8l-yni.css';
import '../../css/i/ibnhnab7c.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="bsh15bben"/><path class="htp0g1v4z"/><path class="nfm8l-yni"/><path class="ibnhnab7c"/></g>`,
		"fallback": "streamline-plump-color:horizontal-menu-circle",
	});
}

export default Component;
