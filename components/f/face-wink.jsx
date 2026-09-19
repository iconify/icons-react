import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to0c2ub7t.css';
import '../../css/s/shu3xdl9q.css';
import '../../css/l/lvcu5acvo.css';
import '../../css/r/r2vii5b9i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to0c2ub7t"><circle class="shu3xdl9q"/><path class="lvcu5acvo"/><path class="r2vii5b9i"/></g>`,
		"fallback": "akar-icons:face-wink",
	});
}

export default Component;
