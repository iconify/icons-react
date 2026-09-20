import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lryz7mrcd.css';
import '../../css/r/rcmt1r3hl.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lryz7mrcd"/><path class="rcmt1r3hl"/>`,
		"fallback": "selfhst:healthchecks",
	});
}

export default Component;
