import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/s4f732bpg.css';
import '../../css/p/p8vnclbzz.css';
import '../../css/s/s7kktcfmb.css';
import '../../css/o/oc0cv-yid.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="s4f732bpg"/><path class="p8vnclbzz"/><path class="s7kktcfmb"/><path class="oc0cv-yid"/></g>`,
		"fallback": "streamline-cyber-color:charlie-chaplin",
	});
}

export default Component;
