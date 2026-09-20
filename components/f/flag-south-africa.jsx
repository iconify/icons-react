import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e8cxt48ie.css';
import '../../css/w/wsae9_log.css';
import '../../css/r/rylvxccac.css';
import '../../css/l/l6jqjmbhe.css';
import '../../css/q/qy525jbwx.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e8cxt48ie"/><path class="wsae9_log"/><path class="rylvxccac"/><path class="l6jqjmbhe"/><path class="qy525jbwx"/>`,
		"fallback": "openmoji:flag-south-africa",
	});
}

export default Component;
