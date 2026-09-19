import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qk6mzs3do.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qk6mzs3do"/>`,
		"fallback": "catppuccin:elixir",
	});
}

export default Component;
