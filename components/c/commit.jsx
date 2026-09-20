import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vae0u8-_g.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vae0u8-_g"/>`,
		"fallback": "picon:commit",
	});
}

export default Component;
