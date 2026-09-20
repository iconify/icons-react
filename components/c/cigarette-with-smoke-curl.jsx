import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/au_v0wb-k.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="au_v0wb-k"/>`,
		"fallback": "pinhead:cigarette-with-smoke-curl",
	});
}

export default Component;
