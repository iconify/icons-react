import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aw9rmcz9o.css';
import '../../css/m/m4l6-obyg.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aw9rmcz9o"/><path class="m4l6-obyg"/>`,
		"fallback": "flag:at-1x1",
	});
}

export default Component;
