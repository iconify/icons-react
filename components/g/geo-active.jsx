import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/clawo4fnc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="clawo4fnc"/>`,
		"fallback": "nrk:geo-active",
	});
}

export default Component;
