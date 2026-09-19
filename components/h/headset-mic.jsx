import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aw6f8ebgz.css';

const viewBox = {"width":384,"height":480};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aw6f8ebgz"/>`,
		"fallback": "zmdi:headset-mic",
	});
}

export default Component;
