import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uw4ku0b8r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="uw4ku0b8r"/>`,
		"fallback": "heroicons:arrows-pointing-in-solid",
	});
}

export default Component;
