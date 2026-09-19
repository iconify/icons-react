import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/v/vpqs4v0fe.css';
import '../../css/g/gn-k8rb_d.css';
import '../../css/n/nu33h_bty.css';
import '../../css/c/cm-ruxshm.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="vpqs4v0fe"/><path class="gn-k8rb_d"/><path class="nu33h_bty"/><path class="cm-ruxshm"/></g>`,
		"fallback": "cryptocurrency:etc",
	});
}

export default Component;
