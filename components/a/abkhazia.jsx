import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/our1udbzf.css';
import '../../css/j/j8s-i4d1w.css';
import '../../css/c/czx55d_pt.css';
import '../../css/z/zbr5z4smz.css';

const viewBox = {"width":30,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="our1udbzf"/><path class="j8s-i4d1w"/><path class="czx55d_pt"/><path class="zbr5z4smz"/>`,
		"fallback": "tabler-flags:abkhazia",
	});
}

export default Component;
