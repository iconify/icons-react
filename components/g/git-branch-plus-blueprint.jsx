import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/k/k06s3n_3k.css';
import '../../css/n/nb3ffvcfb.css';
import '../../css/p/pbtr10c0j.css';
import '../../css/l/lf33rm5za.css';
import '../../css/c/cd-6u1e9y.css';
import '../../css/q/q71xzgbmm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="k06s3n_3k wm-deco"/><path class="nb3ffvcfb wm-deco"/><path class="pbtr10c0j wm-deco"/><path class="lf33rm5za wm-k"/><path class="cd-6u1e9y wm-s"/><path class="q71xzgbmm wm-k"/></g>`,
		"fallback": "withicons:git-branch-plus-blueprint",
	});
}

export default Component;
