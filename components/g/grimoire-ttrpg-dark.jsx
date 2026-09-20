import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ur2nqhb_s.css';
import '../../css/x/xmk3jccpe.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ur2nqhb_s"/><path class="xmk3jccpe"/>`,
		"fallback": "selfhst:grimoire-ttrpg-dark",
	});
}

export default Component;
