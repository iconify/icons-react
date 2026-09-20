import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rva00qbbz.css';
import '../../css/j/jii8hcxej.css';

const viewBox = {"width":24,"height":25};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rva00qbbz"/><path class="jii8hcxej"/>`,
		"fallback": "lineicons:box-archive-1",
	});
}

export default Component;
