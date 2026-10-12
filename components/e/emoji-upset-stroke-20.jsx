import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oga6gq3pc.css';
import '../../css/j/jpdmwmb0j.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oga6gq3pc"/><path class="jpdmwmb0j"/>`,
		"fallback": "garden:emoji-upset-stroke-20",
	});
}

export default Component;
