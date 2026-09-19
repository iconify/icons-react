import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/roar_qb4z.css';
import '../../css/a/azfjht1_y.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="roar_qb4z"/><path class="azfjht1_y"/>`,
		"fallback": "catppuccin:folder-javascript",
	});
}

export default Component;
