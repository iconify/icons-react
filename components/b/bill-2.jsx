import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/aqasqsbwy.css';
import '../../css/n/nwmmz0b6r.css';
import '../../css/k/k3_a_wb4n.css';
import '../../css/w/w1eihik_j.css';
import '../../css/f/fhv54ibid.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="aqasqsbwy"/><path clip-rule="evenodd" class="nwmmz0b6r"/><path class="k3_a_wb4n"/><path class="w1eihik_j"/><path class="fhv54ibid"/></g>`,
		"fallback": "streamline-color:bill-2",
	});
}

export default Component;
