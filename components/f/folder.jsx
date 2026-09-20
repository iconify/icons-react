import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/stlte0cow.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="stlte0cow"/>`,
		"fallback": "lucide:folder",
	});
}

export default Component;
