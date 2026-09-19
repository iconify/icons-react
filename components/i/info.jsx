import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ucd-8ebmt.css';
import '../../css/d/d3c-6wbuu.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ucd-8ebmt"/><path class="d3c-6wbuu"/>`,
		"fallback": "icomoon-free:info",
	});
}

export default Component;
