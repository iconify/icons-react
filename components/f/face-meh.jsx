import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to010e9dm.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="to010e9dm"/>`,
		"fallback": "fa6-solid:face-meh",
	});
}

export default Component;
