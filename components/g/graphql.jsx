import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lzq6zreob.css';

const viewBox = {"width":21,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lzq6zreob"/>`,
		"fallback": "fontisto:graphql",
	});
}

export default Component;
