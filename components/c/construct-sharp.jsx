import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ouaf7fzvu.css';
import '../../css/v/vvr-kwzju.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ouaf7fzvu"/><path class="vvr-kwzju"/>`,
		"fallback": "ion:construct-sharp",
	});
}

export default Component;
