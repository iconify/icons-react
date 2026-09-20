import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/v89145xor.css';
import '../../css/s/sdjy2ybub.css';
import '../../css/o/ow6hpmbxg.css';
import '../../css/p/pir2u0bwv.css';
import '../../css/r/rjyzt2b3u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="v89145xor"/><path class="sdjy2ybub"/><path class="ow6hpmbxg"/><path class="pir2u0bwv"/><path class="rjyzt2b3u"/></g>`,
		"fallback": "streamline-cyber-color:bank-notes",
	});
}

export default Component;
