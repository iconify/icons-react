import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/l/lagbrq0ki.css';
import '../../css/u/u3b986z9u.css';
import '../../css/o/o44kachjh.css';
import '../../css/t/tld1z7kax.css';
import '../../css/r/r_mtyucdg.css';
import '../../css/i/iguez2bko.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="lagbrq0ki"/><path class="u3b986z9u"/><path class="o44kachjh"/><path class="tld1z7kax"/><path class="r_mtyucdg"/><path class="iguez2bko"/></g>`,
		"fallback": "matita:bone",
	});
}

export default Component;
