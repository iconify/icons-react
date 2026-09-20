import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/aq71-lrxa.css';
import '../../css/n/n91xa473e.css';
import '../../css/v/vo58e954h.css';
import '../../css/b/b14rjtbws.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="aq71-lrxa"/><path clip-rule="evenodd" class="n91xa473e"/><path clip-rule="evenodd" class="vo58e954h"/><path clip-rule="evenodd" class="b14rjtbws"/></g>`,
		"fallback": "streamline-flex-color:champagne-party-alcohol-flat",
	});
}

export default Component;
