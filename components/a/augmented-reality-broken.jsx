import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/v/vzy5f4b4h.css';
import '../../css/z/zun2xob-r.css';
import '../../css/g/grep09bwo.css';
import '../../css/l/l3ir29pqm.css';
import '../../css/s/sy4dadcnw.css';
import '../../css/s/si_mtzbvj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="vzy5f4b4h"/><path class="zun2xob-r"/><path class="grep09bwo"/><path class="l3ir29pqm"/><path class="sy4dadcnw"/><path class="si_mtzbvj"/></g>`,
		"fallback": "solar:augmented-reality-broken",
	});
}

export default Component;
