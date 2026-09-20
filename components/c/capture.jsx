import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qk7p9ibji.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qk7p9ibji"/>`,
		"fallback": "ix:capture",
	});
}

export default Component;
