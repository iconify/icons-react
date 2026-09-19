import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k3bd7mocx.css';

const viewBox = {"width":960,"height":959};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k3bd7mocx"/>`,
		"fallback": "whh:dietwo",
	});
}

export default Component;
