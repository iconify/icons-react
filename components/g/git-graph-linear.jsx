import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/h/h7chmqbda.css';
import '../../css/u/ua_8dab4r.css';
import '../../css/f/fn1p5fm9f.css';
import '../../css/t/tlj5bqbki.css';
import '../../css/s/s76sj2w-u.css';
import '../../css/c/cipdabcte.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="h7chmqbda"/><path class="ua_8dab4r"/><path class="fn1p5fm9f"/><path class="tlj5bqbki"/><path class="s76sj2w-u"/><path class="cipdabcte"/></g>`,
		"fallback": "solar:git-graph-linear",
	});
}

export default Component;
