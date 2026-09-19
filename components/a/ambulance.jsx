import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/l/l9hplwb4s.css';
import '../../css/o/o49mt59vz.css';
import '../../css/d/deaqfodib.css';
import '../../css/t/t62fexb-m.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><path class="l9hplwb4s"/><path class="o49mt59vz"/><circle class="deaqfodib"/><circle class="t62fexb-m"/></g>`,
		"fallback": "icon-park-solid:ambulance",
	});
}

export default Component;
