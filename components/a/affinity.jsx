import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/soo8zp4nw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="soo8zp4nw"/>`,
		"fallback": "simple-icons:affinity",
	});
}

export default Component;
