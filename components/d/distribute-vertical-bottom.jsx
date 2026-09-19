import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l9bpb7vag.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l9bpb7vag"/>`,
		"fallback": "carbon:distribute-vertical-bottom",
	});
}

export default Component;
