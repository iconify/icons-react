import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uhyol_beh.css';
import '../../css/r/r3s9vk_bi.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uhyol_beh"/><path class="r3s9vk_bi"/>`,
		"fallback": "catppuccin:gleam",
	});
}

export default Component;
