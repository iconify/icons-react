import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e41ixubii.css';
import '../../css/q/qu273xbrm.css';
import '../../css/n/n4y4rsr7s.css';
import '../../css/k/k1zz3n-8j.css';
import '../../css/w/wjj97vb3u.css';

const viewBox = {"width":45,"height":45};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="e41ixubii"><path class="qu273xbrm"/><path class="n4y4rsr7s"/><path class="k1zz3n-8j"/><path class="wjj97vb3u"/></g>`,
		"fallback": "thesvg-color:checkmate",
	});
}

export default Component;
