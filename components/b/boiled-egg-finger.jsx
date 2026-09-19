import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pmny2jbne.css';

const viewBox = {"width":304,"height":520};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pmny2jbne"/>`,
		"fallback": "ps:boiled-egg-finger",
	});
}

export default Component;
