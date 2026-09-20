import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3xtuk_0z.css';
import '../../css/w/wdm33gbqj.css';
import '../../css/k/kmxaihbyw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3xtuk_0z"><path class="wdm33gbqj"/><path class="kmxaihbyw"/></g>`,
		"fallback": "streamline-cyber:french-fries",
	});
}

export default Component;
