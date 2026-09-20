import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3xtuk_0z.css';
import '../../css/m/mo1h2b7nw.css';
import '../../css/q/qotgo0b5i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3xtuk_0z"><path class="mo1h2b7nw"/><path class="qotgo0b5i"/></g>`,
		"fallback": "streamline-cyber:gas-station",
	});
}

export default Component;
