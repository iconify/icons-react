import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hss8mqb3a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hss8mqb3a"/>`,
		"fallback": "streamline-ultimate:browser-page-layout",
	});
}

export default Component;
