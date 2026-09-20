import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/d/dvj_53aom.css';
import '../../css/u/u3br1s44l.css';
import '../../css/b/bpb98ob3v.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="dvj_53aom"/><path class="u3br1s44l"/><path class="bpb98ob3v"/></g>`,
		"fallback": "streamline-flex:credit-card-disable",
	});
}

export default Component;
