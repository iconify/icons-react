import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k0q8216sb.css';
import '../../css/u/uf53occ4u.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k0q8216sb"/><circle class="uf53occ4u"/>`,
		"fallback": "catppuccin:cue",
	});
}

export default Component;
