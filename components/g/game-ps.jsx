import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0a9vkbzg.css';
import '../../css/g/gx07r35eh.css';
import '../../css/b/be8ghcbcr.css';
import '../../css/l/lxwvxtb5e.css';
import '../../css/w/w9pn7h47z.css';
import '../../css/n/nvf4ydbka.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="a0a9vkbzg"><path class="gx07r35eh"/><path class="be8ghcbcr"/><path class="lxwvxtb5e"/><path class="w9pn7h47z"/><path class="nvf4ydbka"/></g>`,
		"fallback": "icon-park:game-ps",
	});
}

export default Component;
