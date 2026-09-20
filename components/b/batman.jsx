import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3xtuk_0z.css';
import '../../css/z/zayijjraj.css';
import '../../css/z/z6f1rffab.css';
import '../../css/p/pwgwuw6ri.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3xtuk_0z"><path class="zayijjraj"/><path class="z6f1rffab"/><path class="pwgwuw6ri"/></g>`,
		"fallback": "streamline-cyber:batman",
	});
}

export default Component;
