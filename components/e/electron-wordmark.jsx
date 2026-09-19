import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cqcd_1b7g.css';
import '../../css/n/nrssonjct.css';
import '../../css/v/vpcdfbb5g.css';
import '../../css/i/i_fa-oyvq.css';
import '../../css/f/fp6ouy0iq.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cqcd_1b7g"><path class="nrssonjct"/><path class="vpcdfbb5g"/><path class="i_fa-oyvq"/><path class="fp6ouy0iq"/></g>`,
		"fallback": "devicon:electron-wordmark",
	});
}

export default Component;
