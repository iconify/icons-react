import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hjw4bwb7l.css';
import '../../css/c/cyccme8ed.css';
import '../../css/p/p98lw798q.css';
import '../../css/d/dupja4c-l.css';
import '../../css/k/kdz4acc8r.css';
import '../../css/j/ja_tpciet.css';
import '../../css/t/txec4eymi.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hjw4bwb7l"/><path class="cyccme8ed"/><circle class="p98lw798q"/><path class="dupja4c-l"/><g class="kdz4acc8r"><circle class="ja_tpciet"/><path class="txec4eymi"/></g>`,
		"fallback": "openmoji:black-chess-king",
	});
}

export default Component;
