import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sfo1k5b-e.css';
import '../../css/w/wku3mccqo.css';
import '../../css/t/tmnq0f59p.css';
import '../../css/q/qtouc3b8f.css';

const viewBox = {"width":16,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sfo1k5b-e"/><path class="wku3mccqo"/><path class="tmnq0f59p"/><path class="qtouc3b8f"/>`,
		"fallback": "formkit:amex",
	});
}

export default Component;
