import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vwk9km0ju.css';
import '../../css/q/qc6zzhbcb.css';
import '../../css/w/wojf2p3ei.css';
import '../../css/s/seqbell4o.css';
import '../../css/l/lehueubsj.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vwk9km0ju"/><path class="qc6zzhbcb"/><path class="wojf2p3ei"/><path class="seqbell4o"/><path class="lehueubsj"/>`,
		"fallback": "devicon:firebase",
	});
}

export default Component;
