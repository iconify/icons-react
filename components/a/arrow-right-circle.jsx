import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/n/nubecpt7r.css';
import '../../css/b/b46eahb0q.css';
import '../../css/n/n5pc76bja.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="nubecpt7r"/><path class="b46eahb0q"/><path class="n5pc76bja"/></g>`,
		"fallback": "mage:arrow-right-circle",
	});
}

export default Component;
