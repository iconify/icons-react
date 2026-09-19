import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b2n65sb6i.css';

const viewBox = {"width":650,"height":679};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b2n65sb6i"/>`,
		"fallback": "ls:blogger",
	});
}

export default Component;
