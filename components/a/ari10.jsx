import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r4necybef.css';
import '../../css/a/a4z6_-bfl.css';
import '../../css/f/f3u9p6fad.css';
import '../../css/n/n62mo89yv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r4necybef"/><path clip-rule="evenodd" class="a4z6_-bfl"/><path class="f3u9p6fad"/><path clip-rule="evenodd" class="n62mo89yv"/>`,
		"fallback": "token:ari10",
	});
}

export default Component;
