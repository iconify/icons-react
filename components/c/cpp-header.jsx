import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tn9o4mbwr.css';
import '../../css/b/bmx7xbb_a.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="tn9o4mbwr"/><path class="bmx7xbb_a"/>`,
		"fallback": "catppuccin:cpp-header",
	});
}

export default Component;
