import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/icq3kqblj.css';
import '../../css/g/ga78bob5u.css';
import '../../css/p/pxeivcbuh.css';
import '../../css/q/q29j2bh-e.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="icq3kqblj"/><path class="ga78bob5u"/><path class="pxeivcbuh"/><path class="q29j2bh-e"/>`,
		"fallback": "energy-icons:chart-polar-48-bold",
	});
}

export default Component;
