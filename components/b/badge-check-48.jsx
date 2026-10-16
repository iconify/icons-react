import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jha4hptgn.css';
import '../../css/g/gx580lbzp.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jha4hptgn"/><path class="gx580lbzp"/>`,
		"fallback": "energy-icons:badge-check-48",
	});
}

export default Component;
