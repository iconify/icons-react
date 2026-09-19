import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g3y-a-e0o.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g3y-a-e0o"/>`,
		"fallback": "f7:hand-thumbsdown-fill",
	});
}

export default Component;
