import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/c/cr8wepbsa.css';
import '../../css/r/r56i8-b2t.css';
import '../../css/t/tqhf4up4j.css';
import '../../css/t/tkq48kbjd.css';
import '../../css/n/n_q53lprr.css';
import '../../css/g/g5zwodg6t.css';
import '../../css/j/joiff4veu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="cr8wepbsa"/><path class="r56i8-b2t"/><path class="tqhf4up4j"/><path class="tkq48kbjd"/><path class="n_q53lprr"/><path class="g5zwodg6t"/><path class="joiff4veu"/></g>`,
		"fallback": "matita:car",
	});
}

export default Component;
