import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3xtuk_0z.css';
import '../../css/u/u1l5wacgu.css';
import '../../css/y/ynbnkmbjl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3xtuk_0z"><path class="u1l5wacgu"/><path class="ynbnkmbjl"/></g>`,
		"fallback": "streamline-cyber:drum-2",
	});
}

export default Component;
