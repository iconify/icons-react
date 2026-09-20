import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sogrj-bvp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sogrj-bvp"/>`,
		"fallback": "streamline-logos:bandcamp-logo-1",
	});
}

export default Component;
