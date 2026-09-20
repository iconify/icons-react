import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/d/dkacq2k4x.css';
import '../../css/g/gaenu2bgb.css';
import '../../css/g/gp9mhbcvq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="dkacq2k4x"/><path class="gaenu2bgb"/><path class="gp9mhbcvq"/></g>`,
		"fallback": "reicon:airdrop",
	});
}

export default Component;
