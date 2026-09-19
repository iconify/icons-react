import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/o/ohlpaj_qx.css';
import '../../css/i/i6lvci1zi.css';
import '../../css/e/ejq2wacjo.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><circle class="ohlpaj_qx"/><path class="i6lvci1zi"/></g><circle class="ejq2wacjo"/>`,
		"fallback": "garden:alert-error-stroke-12",
	});
}

export default Component;
