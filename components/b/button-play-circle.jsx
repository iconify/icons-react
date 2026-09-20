import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/r/rc0v0t5_w.css';
import '../../css/h/hhtslxb8k.css';
import '../../css/a/a56mf6bad.css';
import '../../css/o/obimbob9k.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="rc0v0t5_w"/><path class="hhtslxb8k"/><path class="a56mf6bad"/><path class="obimbob9k"/></g>`,
		"fallback": "streamline-plump-color:button-play-circle",
	});
}

export default Component;
