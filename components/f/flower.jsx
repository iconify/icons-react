import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qsg68bc0n.css';
import '../../css/w/w-ga42vhg.css';
import '../../css/i/iyd-mt7sj.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="qsg68bc0n"><path class="w-ga42vhg"/><path class="iyd-mt7sj"/></g>`,
		"fallback": "doodle-icons:flower",
	});
}

export default Component;
