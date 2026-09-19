import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vm3ivccum.css';
import '../../css/p/pf4bw54jx.css';
import '../../css/y/y2wltgzpg.css';
import '../../css/y/yyg2ynbxg.css';
import '../../css/v/vbo-lh93k.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="vm3ivccum"><path class="pf4bw54jx"/><path class="y2wltgzpg"/><path class="yyg2ynbxg"/><path class="vbo-lh93k"/></g>`,
		"fallback": "icon-park-outline:index-finger",
	});
}

export default Component;
