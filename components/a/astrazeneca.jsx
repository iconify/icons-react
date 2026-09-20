import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f1uf_1b9n.css';

const viewBox = {"width":300,"height":43,"left":-0.835,"top":-0.509};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="f1uf_1b9n"/>`,
		"fallback": "thesvg-color:astrazeneca",
	});
}

export default Component;
