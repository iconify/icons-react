import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x8r1eubvq.css';
import '../../css/c/c4qk6y-3b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x8r1eubvq"/><path class="c4qk6y-3b"/>`,
		"fallback": "token:gzil",
	});
}

export default Component;
