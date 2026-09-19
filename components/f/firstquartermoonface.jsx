import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vtvkpyk2g.css';
import '../../css/e/egat0bbgw.css';
import '../../css/x/xgsdye9cb.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vtvkpyk2g"/><path class="egat0bbgw"/><path class="xgsdye9cb"/>`,
		"fallback": "fxemoji:firstquartermoonface",
	});
}

export default Component;
