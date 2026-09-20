import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zshw9xbca.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zshw9xbca"/>`,
		"fallback": "reicon:arrow-right-3",
	});
}

export default Component;
