import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zs1be3nix.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zs1be3nix"/>`,
		"fallback": "icon-park-outline:h3",
	});
}

export default Component;
