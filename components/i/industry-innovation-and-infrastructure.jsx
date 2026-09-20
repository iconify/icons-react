import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/r/rzs5w8j-k.css';
import '../../css/h/h2_21zo5p.css';
import '../../css/n/ndbwqxbgs.css';
import '../../css/t/tlghytbfp.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="rzs5w8j-k"/><path class="h2_21zo5p"/><path class="ndbwqxbgs"/><path class="tlghytbfp"/></g>`,
		"fallback": "streamline:industry-innovation-and-infrastructure",
	});
}

export default Component;
