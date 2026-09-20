import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mabwzbbvc.css';
import '../../css/a/a1sqeabop.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mabwzbbvc"/><path class="a1sqeabop"/>`,
		"fallback": "nimbus:clock",
	});
}

export default Component;
