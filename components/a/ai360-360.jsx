import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ewssec4ov.css';
import '../../css/p/pc34gub7p.css';
import '../../css/b/bw9-ndn3k.css';
import '../../css/i/iqxj8ubdl.css';
import '../../css/q/qw-_nn3un.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ewssec4ov"><path clip-rule="evenodd" class="pc34gub7p"/><path class="bw9-ndn3k"/><path class="iqxj8ubdl"/><path class="qw-_nn3un"/></g>`,
		"fallback": "thesvg-color:ai360-360",
	});
}

export default Component;
