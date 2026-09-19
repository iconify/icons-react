import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/v/vsvc25b2r.css';
import '../../css/p/p9vjoqtlo.css';
import '../../css/b/bopi9b9jn.css';
import '../../css/f/fxwnb7vgp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="vsvc25b2r"/><circle class="p9vjoqtlo"/><circle class="bopi9b9jn"/><circle class="fxwnb7vgp"/></g>`,
		"fallback": "hugeicons:git-branch",
	});
}

export default Component;
