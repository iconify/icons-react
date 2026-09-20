import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fi46hz2yu.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="fi46hz2yu"/>`,
		"fallback": "nonicons:elixir-16",
	});
}

export default Component;
