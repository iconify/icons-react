import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/niwlhgc7w.css';
import '../../css/q/qvtar0ceo.css';
import '../../css/m/mt75siyua.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="niwlhgc7w"/><path class="qvtar0ceo"/><path class="mt75siyua"/>`,
		"fallback": "selfhst:configclarity",
	});
}

export default Component;
