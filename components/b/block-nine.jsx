import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dhl620mrp.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dhl620mrp"/>`,
		"fallback": "icon-park-solid:block-nine",
	});
}

export default Component;
