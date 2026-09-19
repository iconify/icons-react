import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x5w0p9byi.css';
import '../../css/s/sm_16-bij.css';
import '../../css/r/rpjwekbqt.css';
import '../../css/e/e6ec1d1ol.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="x5w0p9byi"/><circle class="sm_16-bij"/><path class="rpjwekbqt"/><path class="e6ec1d1ol"/>`,
		"fallback": "ion:cart-outline",
	});
}

export default Component;
