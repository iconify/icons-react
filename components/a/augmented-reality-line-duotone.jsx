import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/l/lxnzn9nmw.css';
import '../../css/v/vzy5f4b4h.css';
import '../../css/f/f6nccb4ip.css';
import '../../css/g/grep09bwo.css';
import '../../css/l/l3ir29pqm.css';
import '../../css/s/sy4dadcnw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="lxnzn9nmw"/><path class="vzy5f4b4h"/><path class="f6nccb4ip"/><path class="grep09bwo"/><path class="l3ir29pqm"/><path class="sy4dadcnw"/></g>`,
		"fallback": "solar:augmented-reality-line-duotone",
	});
}

export default Component;
