import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hfv6xfw6f.css';

const viewBox = {"width":896,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hfv6xfw6f"/>`,
		"fallback": "whh:bomb",
	});
}

export default Component;
