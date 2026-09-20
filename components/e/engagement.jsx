import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yrdhj80fb.css';
import '../../css/p/pob-y2b4c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yrdhj80fb"/><path class="pob-y2b4c"/>`,
		"fallback": "stash:engagement",
	});
}

export default Component;
