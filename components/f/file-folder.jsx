import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j424bs14z.css';
import '../../css/g/g-qwz4bks.css';
import '../../css/y/y25wf42gc.css';
import '../../css/o/oqv_b_had.css';
import '../../css/p/potzmaczc.css';
import '../../css/p/pepnw_9xo.css';
import '../../css/t/tc2yzt0of.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j424bs14z"/><path class="g-qwz4bks"/><path class="y25wf42gc"/><path class="oqv_b_had"/><path class="potzmaczc"/><path class="pepnw_9xo"/><path class="tc2yzt0of"/>`,
		"fallback": "streamline-emojis:file-folder",
	});
}

export default Component;
