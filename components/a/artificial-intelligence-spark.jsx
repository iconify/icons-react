import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/x/xhfxg030t.css';
import '../../css/a/am53vrbsi.css';
import '../../css/y/yhxertb1n.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="xhfxg030t"/><path class="am53vrbsi"/><path class="yhxertb1n"/></g>`,
		"fallback": "streamline:artificial-intelligence-spark",
	});
}

export default Component;
