import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u4esp7b2q.css';
import '../../css/i/im-69xmjv.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u4esp7b2q"/><path class="im-69xmjv"/>`,
		"fallback": "selfhst:feeds-fun-dark",
	});
}

export default Component;
