import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v4tz9h42q.css';
import '../../css/x/xri09lbat.css';
import '../../css/z/z3e77fxct.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v4tz9h42q"/><path class="xri09lbat"/><path class="z3e77fxct"/>`,
		"fallback": "withicons-bauhaus:award",
	});
}

export default Component;
