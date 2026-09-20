import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/g/g05gdjfsm.css';
import '../../css/q/qeq5ut1xp.css';
import '../../css/j/jn-mo9brm.css';
import '../../css/u/uxg94fbnk.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="g05gdjfsm"/><path class="qeq5ut1xp"/><path class="jn-mo9brm"/><path class="uxg94fbnk"/></g>`,
		"fallback": "streamline-plump-color:drop-down-menu",
	});
}

export default Component;
