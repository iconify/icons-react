import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zct-ewbsx.css';
import '../../css/i/i2xf5kbgn.css';
import '../../css/c/cx989p37d.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zct-ewbsx"/><path class="i2xf5kbgn"/><path class="cx989p37d"/>`,
		"fallback": "energy-icons:hi-vis-vest-48-bold",
	});
}

export default Component;
