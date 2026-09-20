import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yzzo6jbar.css';
import '../../css/f/fnt2v3b6z.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yzzo6jbar"/><path class="fnt2v3b6z"/>`,
		"fallback": "selfhst:facebook-messenger",
	});
}

export default Component;
