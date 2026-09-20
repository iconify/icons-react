import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qidky7lyq.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qidky7lyq"/>`,
		"fallback": "raphael:commandline",
	});
}

export default Component;
