import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qsdfs2b4v.css';
import '../../css/f/fiddms--z.css';
import '../../css/f/fkfuyq4qg.css';
import '../../css/p/p-p9psboo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="building-outline"><g class="Vector cuyn6tgcc"><path clip-rule="evenodd" class="qsdfs2b4v"/><path clip-rule="evenodd" class="fiddms--z"/><path clip-rule="evenodd" class="fkfuyq4qg"/><path class="p-p9psboo"/></g></g>`,
		"fallback": "cuida:building-outline",
	});
}

export default Component;
