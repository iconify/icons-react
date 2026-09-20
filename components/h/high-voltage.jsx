import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/na378lbag.css';
import '../../css/m/moswv5bay.css';
import '../../css/n/nhtv5tn5e.css';
import '../../css/p/pza602uij.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="na378lbag"/><path class="moswv5bay"/><path class="nhtv5tn5e"/><path class="pza602uij"/>`,
		"fallback": "streamline-emojis:high-voltage",
	});
}

export default Component;
