import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0a9vkbzg.css';
import '../../css/r/r2704obmd.css';
import '../../css/c/crk1s8bim.css';
import '../../css/k/k679bvbzb.css';
import '../../css/z/zvmpbqbdd.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="a0a9vkbzg"><path class="r2704obmd"/><path class="crk1s8bim"/><path class="k679bvbzb"/><path class="zvmpbqbdd"/></g>`,
		"fallback": "icon-park:add-music",
	});
}

export default Component;
