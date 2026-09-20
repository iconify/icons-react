import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/thjuvbz3w.css';
import '../../css/h/h38d_5zoo.css';
import '../../css/s/syvgjcb2o.css';
import '../../css/y/yvxwszbyd.css';

const viewBox = {"width":40,"height":40};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="thjuvbz3w"><path class="h38d_5zoo"/><path class="syvgjcb2o"/><path class="yvxwszbyd"/></g>`,
		"fallback": "streamline-stickies-color:graph-bar-duo",
	});
}

export default Component;
