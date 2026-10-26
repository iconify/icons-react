import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qsg68bc0n.css';
import '../../css/z/z357atbkg.css';
import '../../css/q/qmn3-rbqq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="qsg68bc0n"><path class="z357atbkg"/><path class="qmn3-rbqq"/></g>`,
		"fallback": "doodle-icons:folder",
	});
}

export default Component;
