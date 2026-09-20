import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uv28m5ido.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uv28m5ido"/>`,
		"fallback": "selfhst:flohmarkt-dark",
	});
}

export default Component;
