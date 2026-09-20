import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rn8ox-tri.css';
import '../../css/d/dqshq-b0e.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="rn8ox-tri"/><path class="dqshq-b0e"/>`,
		"fallback": "selfhst:easy-redmine",
	});
}

export default Component;
