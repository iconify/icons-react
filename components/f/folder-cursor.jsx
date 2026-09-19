import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sq78els5g.css';
import '../../css/p/pnp4hqbbq.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sq78els5g"/><path class="pnp4hqbbq"/>`,
		"fallback": "catppuccin:folder-cursor",
	});
}

export default Component;
