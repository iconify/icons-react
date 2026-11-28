import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/k/kficvj2pd.css';
import '../../css/x/xannh1nni.css';
import '../../css/b/bh99u_6hm.css';
import '../../css/z/zbvwo5b2d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="kficvj2pd"/><path class="xannh1nni"/><path class="bh99u_6hm"/><path class="zbvwo5b2d"/></g>`,
		"fallback": "iconaut:file-cog",
	});
}

export default Component;
