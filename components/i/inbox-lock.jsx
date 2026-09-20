import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dv-g7mbyv.css';
import '../../css/m/mvrzh0bko.css';
import '../../css/n/nmg90_b5o.css';
import '../../css/r/r81bukzbz.css';
import '../../css/q/qfrwy8bml.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="dv-g7mbyv"/><path class="mvrzh0bko"/><path class="nmg90_b5o"/><path class="r81bukzbz"/><path class="qfrwy8bml"/></g>`,
		"fallback": "streamline-color:inbox-lock",
	});
}

export default Component;
