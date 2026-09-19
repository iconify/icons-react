import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e1cffchus.css';
import '../../css/v/v5048sbmk.css';
import '../../css/n/n924abcqn.css';
import '../../css/a/aht29abkg.css';
import '../../css/n/ne73a8bqm.css';
import '../../css/b/bevi74bol.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e1cffchus"/><path class="v5048sbmk"/><path class="n924abcqn"/><path class="aht29abkg"/><path class="ne73a8bqm"/><path class="bevi74bol"/>`,
		"fallback": "fxemoji:dragonhead",
	});
}

export default Component;
