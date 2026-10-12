import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u52a-ibck.css';
import '../../css/j/jhwn4fbsd.css';
import '../../css/q/qmmb_82ud.css';
import '../../css/u/ui-ddfl2z.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u52a-ibck"/><path class="jhwn4fbsd"/><path class="qmmb_82ud"/><path class="ui-ddfl2z"/>`,
		"fallback": "energy-icons:ev-charger-off-20-bold",
	});
}

export default Component;
