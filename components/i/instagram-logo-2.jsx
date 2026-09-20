import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/h/hgz4z8bqp.css';
import '../../css/d/dthmub82t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><path class="hgz4z8bqp"/><path class="dthmub82t"/></g>`,
		"fallback": "streamline-logos:instagram-logo-2",
	});
}

export default Component;
