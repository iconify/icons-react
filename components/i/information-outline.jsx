import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mzy55k3-q.css';
import '../../css/g/gtbk85xxx.css';
import '../../css/c/cfprd2egi.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mzy55k3-q"/><path class="gtbk85xxx"/><path class="cfprd2egi"/>`,
		"fallback": "famicons:information-outline",
	});
}

export default Component;
