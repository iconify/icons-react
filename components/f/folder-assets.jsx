import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/roar_qb4z.css';
import '../../css/g/gtgu57bmb.css';
import '../../css/u/utvn67bmq.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="roar_qb4z"/><path class="gtgu57bmb"/><path class="utvn67bmq"/>`,
		"fallback": "catppuccin:folder-assets",
	});
}

export default Component;
