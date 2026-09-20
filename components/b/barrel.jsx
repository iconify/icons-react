import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3xtuk_0z.css';
import '../../css/c/c8k5cf6di.css';
import '../../css/a/arp00bbdk.css';
import '../../css/q/qf0isw3hf.css';
import '../../css/m/mlb_p9b5l.css';
import '../../css/f/fecuxnucj.css';
import '../../css/o/odf6ekb7f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3xtuk_0z"><path class="c8k5cf6di"/><path class="arp00bbdk"/><path class="qf0isw3hf"/><path class="mlb_p9b5l"/><path class="fecuxnucj"/><path class="odf6ekb7f"/></g>`,
		"fallback": "streamline-cyber:barrel",
	});
}

export default Component;
