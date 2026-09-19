import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b_fwht_fc.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b_fwht_fc"/>`,
		"fallback": "catppuccin:go-mod",
	});
}

export default Component;
