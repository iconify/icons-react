import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nduyem.css';
import '../../css/s/so-from-12.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nduyem"/>`,
		"fallback": "line-md:chevron-left",
	});
}

export default Component;
