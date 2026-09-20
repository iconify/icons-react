import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/u/ul00t9wsm.css';
import '../../css/q/q1abyqb5l.css';
import '../../css/h/hw4q3tb7t.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="ul00t9wsm"/><path class="q1abyqb5l"/><path class="hw4q3tb7t"/></g>`,
		"fallback": "streamline-plump-color:dial-pad-finger-2",
	});
}

export default Component;
