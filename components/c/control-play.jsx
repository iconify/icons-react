import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z6tjmo3jk.css';
import '../../css/p/pw4wz8liw.css';
import '../../css/m/mfbnmqh5k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="z6tjmo3jk"><path class="pw4wz8liw"/><path class="mfbnmqh5k"/></g>`,
		"fallback": "streamline-cyber:control-play",
	});
}

export default Component;
