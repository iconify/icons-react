import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pd5phjuic.css';
import '../../css/m/mpxcuqwrx.css';
import '../../css/p/pq5wpqray.css';
import '../../css/x/x9g3gmb-m.css';
import '../../css/i/ixnnopbsp.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pd5phjuic"/><path class="mpxcuqwrx"/><path class="pq5wpqray"/><path class="x9g3gmb-m"/><path class="ixnnopbsp"/>`,
		"fallback": "flat-color-icons:biomass",
	});
}

export default Component;
