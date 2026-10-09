import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fl4_75btv.css';
import '../../css/t/tjbpj-bfm.css';
import '../../css/n/nynkg8aut.css';
import '../../css/a/auez8firg.css';
import '../../css/b/bwg1n3b_l.css';
import '../../css/f/fvknzhbwq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fl4_75btv"/><path class="tjbpj-bfm"/><path class="nynkg8aut"/><path class="auez8firg"/><path class="bwg1n3b_l"/><path class="fvknzhbwq"/>`,
		"fallback": "energy-icons:heatmap-48-bold",
	});
}

export default Component;
