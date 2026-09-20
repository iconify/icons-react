import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/g/gb_iyob3n.css';
import '../../css/q/qwssc2bws.css';
import '../../css/u/ulbcltbax.css';
import '../../css/f/frwb-jbny.css';
import '../../css/k/kwhlrmbid.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="gb_iyob3n"/><path class="qwssc2bws"/><path class="ulbcltbax"/><path class="frwb-jbny"/><path class="kwhlrmbid"/></g>`,
		"fallback": "streamline-ultimate:halloween-candy",
	});
}

export default Component;
