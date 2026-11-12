import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/twhrcbcyq.css';
import '../../css/w/w5e98qb4j.css';
import '../../css/o/odocvr4pt.css';
import '../../css/k/k8kt187zo.css';
import '../../css/w/wyu3oubvu.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="twhrcbcyq"/><path class="w5e98qb4j"/><path class="odocvr4pt"/><path class="k8kt187zo"/><path class="wyu3oubvu"/>`,
		"fallback": "selfhst:crowdsec",
	});
}

export default Component;
