import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dv-g7mbyv.css';
import '../../css/n/n5ounvwor.css';
import '../../css/n/nmg90_b5o.css';
import '../../css/q/qxtebfcka.css';
import '../../css/s/strkd2bis.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="dv-g7mbyv"/><path class="n5ounvwor"/><path class="nmg90_b5o"/><path class="qxtebfcka"/><path class="strkd2bis"/></g>`,
		"fallback": "streamline-color:inbox-favorite-heart",
	});
}

export default Component;
