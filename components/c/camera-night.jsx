import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3xtuk_0z.css';
import '../../css/t/tswci7b9s.css';
import '../../css/a/agrcop6be.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3xtuk_0z"><path class="tswci7b9s"/><path class="agrcop6be"/></g>`,
		"fallback": "streamline-cyber:camera-night",
	});
}

export default Component;
