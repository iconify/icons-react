import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qsg68bc0n.css';
import '../../css/e/e4_nobb6z.css';
import '../../css/u/un4dkcxsq.css';
import '../../css/t/twvj-acfu.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="qsg68bc0n"><path class="e4_nobb6z"/><path class="un4dkcxsq"/><path class="twvj-acfu"/></g>`,
		"fallback": "doodle-icons:candy-cane",
	});
}

export default Component;
