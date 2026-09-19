import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/roar_qb4z.css';
import '../../css/b/bwck-2bqv.css';
import '../../css/x/x804q6kvo.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="roar_qb4z"/><circle class="bwck-2bqv"/><path class="x804q6kvo"/>`,
		"fallback": "catppuccin:folder-include",
	});
}

export default Component;
