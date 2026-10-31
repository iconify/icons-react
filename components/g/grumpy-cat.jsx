import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/c/cyjw215jy.css';
import '../../css/w/wnz-pw0la.css';
import '../../css/t/tgzwl3bqk.css';
import '../../css/n/nbjzccc-a.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="cyjw215jy"/><path class="wnz-pw0la"/><path class="tgzwl3bqk"/><path class="nbjzccc-a"/></g>`,
		"fallback": "streamline-memes:grumpy-cat",
	});
}

export default Component;
