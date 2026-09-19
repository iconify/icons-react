import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y7fzjqbhc.css';
import '../../css/d/drnzv18qw.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y7fzjqbhc"/><path class="drnzv18qw"/>`,
		"fallback": "famicons:gift",
	});
}

export default Component;
