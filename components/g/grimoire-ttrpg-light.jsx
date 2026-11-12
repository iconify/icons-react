import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ur2nqhb_s.css';
import '../../css/c/cz512trdi.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ur2nqhb_s"/><path class="cz512trdi"/>`,
		"fallback": "selfhst:grimoire-ttrpg-light",
	});
}

export default Component;
