import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/f/fra2v7_xn.css';
import '../../css/a/a3k-1f3du.css';
import '../../css/i/ibko5k8me.css';
import '../../css/k/kl1ci0zzd.css';
import '../../css/p/phmwp8b9d.css';
import '../../css/r/ry8ytjbib.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="fra2v7_xn wm-deco"/><path class="a3k-1f3du wm-deco"/><path class="ibko5k8me wm-k"/><path class="kl1ci0zzd wm-a"/><path class="phmwp8b9d wm-k"/><path class="ry8ytjbib wm-a"/></g>`,
		"fallback": "withicons:arrow-up-blueprint",
	});
}

export default Component;
