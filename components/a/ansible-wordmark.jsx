import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x120vrb5q.css';
import '../../css/t/tl5abbc0w.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x120vrb5q"/><path class="tl5abbc0w"/>`,
		"fallback": "devicon-plain:ansible-wordmark",
	});
}

export default Component;
