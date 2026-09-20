import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dsmvn1bgp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="dsmvn1bgp"/>`,
		"fallback": "streamline-sharp:eco-house-remix",
	});
}

export default Component;
