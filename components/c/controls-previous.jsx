import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/if63kzvhg.css';
import '../../css/e/e8taeev-a.css';
import '../../css/l/l9xwhmbjb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="if63kzvhg"/><path class="e8taeev-a"/><path class="l9xwhmbjb"/></g>`,
		"fallback": "streamline-ultimate-color:controls-previous",
	});
}

export default Component;
