import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dcsdb2bla.css';
import '../../css/c/cpwldbcex.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dcsdb2bla"/><path class="cpwldbcex"/>`,
		"fallback": "lineicons:caravan",
	});
}

export default Component;
