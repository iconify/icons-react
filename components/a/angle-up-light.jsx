import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hz7-v-bzt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hz7-v-bzt"/>`,
		"fallback": "stash:angle-up-light",
	});
}

export default Component;
