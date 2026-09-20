import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3xtuk_0z.css';
import '../../css/v/vs_617bvo.css';
import '../../css/r/rafrg1b6o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3xtuk_0z"><path class="vs_617bvo"/><path class="rafrg1b6o"/></g>`,
		"fallback": "streamline-cyber:database-network-1",
	});
}

export default Component;
