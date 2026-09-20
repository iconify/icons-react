import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qqd6bpb0l.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qqd6bpb0l"/>`,
		"fallback": "selfhst:hydrus-web-dark",
	});
}

export default Component;
