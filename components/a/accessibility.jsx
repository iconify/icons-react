import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l_spsnbot.css';
import '../../css/j/jgbcgmb9x.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l_spsnbot"/><path class="jgbcgmb9x"/>`,
		"fallback": "ion:accessibility",
	});
}

export default Component;
