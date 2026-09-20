import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qi4tymrtz.css';
import '../../css/k/k51gsefpd.css';
import '../../css/u/u1wdaq6xr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qi4tymrtz"/><path clip-rule="evenodd" class="k51gsefpd"/><path clip-rule="evenodd" class="u1wdaq6xr"/>`,
		"fallback": "stash:emoji-joy-light",
	});
}

export default Component;
