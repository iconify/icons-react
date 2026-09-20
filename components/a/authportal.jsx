import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nyt-wmt3x.css';
import '../../css/p/pmnep-p9l.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nyt-wmt3x"/><path class="pmnep-p9l"/>`,
		"fallback": "selfhst:authportal",
	});
}

export default Component;
