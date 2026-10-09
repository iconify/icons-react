import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u-py7pbjn.css';
import '../../css/d/d59gayyww.css';
import '../../css/m/m0ym9zbob.css';
import '../../css/c/c_xh25dlx.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u-py7pbjn"/><path class="d59gayyww"/><path class="m0ym9zbob"/><path class="c_xh25dlx"/>`,
		"fallback": "energy-icons:curtailment-48",
	});
}

export default Component;
