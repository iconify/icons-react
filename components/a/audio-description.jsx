import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xyi47_3sj.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xyi47_3sj"/>`,
		"fallback": "fa-solid:audio-description",
	});
}

export default Component;
