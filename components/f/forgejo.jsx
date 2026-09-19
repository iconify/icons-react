import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/v/vxnrsgbit.css';
import '../../css/p/p_240xb4r.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="vxnrsgbit"/><path class="p_240xb4r"/></g>`,
		"fallback": "catppuccin:forgejo",
	});
}

export default Component;
