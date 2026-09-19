import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qepuaqbvx.css';
import '../../css/n/np5p5lbru.css';
import '../../css/r/r2p4djrni.css';
import '../../css/g/gmfi77gxg.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="qepuaqbvx"><circle class="np5p5lbru"/><path class="r2p4djrni"/></g><circle class="gmfi77gxg"/>`,
		"fallback": "garden:info-stroke-16",
	});
}

export default Component;
