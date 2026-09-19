import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/krn-s63up.css';
import '../../css/s/smbx2_k0z.css';
import '../../css/v/vto-p9r5y.css';
import '../../css/b/be-8-kdwh.css';
import '../../css/z/zs83a7b3p.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="krn-s63up"/><path class="smbx2_k0z"/><circle class="vto-p9r5y"/><circle class="be-8-kdwh"/><path class="zs83a7b3p"/>`,
		"fallback": "catppuccin:hare",
	});
}

export default Component;
