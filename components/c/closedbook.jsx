import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h8xcg7bzh.css';
import '../../css/o/o6g1-kwkw.css';
import '../../css/x/xgerdnc5e.css';
import '../../css/d/dygyyv64v.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h8xcg7bzh"/><path class="o6g1-kwkw"/><path class="xgerdnc5e"/><path class="dygyyv64v"/>`,
		"fallback": "fxemoji:closedbook",
	});
}

export default Component;
