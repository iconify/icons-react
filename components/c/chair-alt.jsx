import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/miifqw2bi.css';

const viewBox = {"width":1536,"height":1664};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="miifqw2bi"/>`,
		"fallback": "vs:chair-alt",
	});
}

export default Component;
