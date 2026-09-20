import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/cns8dzbnj.css';
import '../../css/z/zshdeb55g.css';
import '../../css/d/dau5s7bgu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="cns8dzbnj"/><path class="zshdeb55g"/><path class="dau5s7bgu"/></g>`,
		"fallback": "reicon:corkscrew-duotone",
	});
}

export default Component;
