import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a1z2bma3g.css';
import '../../css/q/qhpa06bqs.css';
import '../../css/s/sksczibjq.css';
import '../../css/z/z1omxobhi.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a1z2bma3g"/><path class="qhpa06bqs"/><path class="sksczibjq"/><path class="z1omxobhi"/>`,
		"fallback": "energy-icons:greenhouse-effect-20-bold",
	});
}

export default Component;
