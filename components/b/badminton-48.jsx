import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ut7yqz7tq.css';
import '../../css/z/zi82qc2iw.css';
import '../../css/w/w2897bbun.css';
import '../../css/l/lsrj_2bkq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ut7yqz7tq"/><path class="zi82qc2iw"/><path class="w2897bbun"/><path class="lsrj_2bkq"/>`,
		"fallback": "energy-icons:badminton-48",
	});
}

export default Component;
