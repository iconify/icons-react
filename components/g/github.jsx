import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z5jqn4b3j.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="z5jqn4b3j"/>`,
		"fallback": "pajamas:github",
	});
}

export default Component;
