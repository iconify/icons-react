import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/d/dvkq3fkcy.css';
import '../../css/g/gzpm6zbzn.css';
import '../../css/j/jqnus1b-u.css';
import '../../css/b/brwm01bnu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="dvkq3fkcy"/><path class="gzpm6zbzn"/><path class="jqnus1b-u"/><path class="brwm01bnu"/></g>`,
		"fallback": "hugeicons:hoodie",
	});
}

export default Component;
