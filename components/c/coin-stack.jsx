import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3xtuk_0z.css';
import '../../css/w/wpxpi9bcz.css';
import '../../css/o/o4c109bqk.css';
import '../../css/n/npcl06bve.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3xtuk_0z"><path class="wpxpi9bcz"/><path class="o4c109bqk"/><path class="npcl06bve"/></g>`,
		"fallback": "streamline-cyber:coin-stack",
	});
}

export default Component;
