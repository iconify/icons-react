import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/e/evedbgrrd.css';
import '../../css/s/s4uk5n7uw.css';
import '../../css/h/hnxobrbrn.css';
import '../../css/o/ohlg0wbaj.css';
import '../../css/k/klzcy0ogc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="evedbgrrd"/><path class="s4uk5n7uw wm-k"/><path class="hnxobrbrn wm-a"/><path class="ohlg0wbaj wm-s"/><path class="klzcy0ogc wm-deco"/></g>`,
		"fallback": "withicons-kawaii:champagne-toast",
	});
}

export default Component;
