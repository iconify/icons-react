import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qccp3wbhy.css';
import '../../css/b/b2tyl1b2g.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qccp3wbhy"/><path clip-rule="evenodd" class="b2tyl1b2g"/>`,
		"fallback": "qlementine-icons:clock-16",
	});
}

export default Component;
