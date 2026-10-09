import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/koyov2bfs.css';
import '../../css/a/aez0dwbdt.css';
import '../../css/k/keapg2bjm.css';
import '../../css/b/b9s0npblv.css';
import '../../css/u/uin4slb1r.css';
import '../../css/y/yyg0fywys.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="koyov2bfs"/><path class="aez0dwbdt"/><path class="keapg2bjm"/><path class="b9s0npblv"/><path class="uin4slb1r"/><path class="yyg0fywys"/>`,
		"fallback": "energy-icons:e-bike-charging-20-bold",
	});
}

export default Component;
