import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xf58xqbld.css';
import '../../css/g/g-fly6bnt.css';
import '../../css/b/b_jcstb8p.css';
import '../../css/b/bq6_7qd5x.css';
import '../../css/y/y7djzqyor.css';
import '../../css/k/ked590wco.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="xf58xqbld"/><path class="g-fly6bnt"/><circle class="b_jcstb8p"/><path class="bq6_7qd5x"/><path class="y7djzqyor"/><path class="ked590wco"/></g>`,
		"fallback": "andrsrxn:git-remote",
	});
}

export default Component;
