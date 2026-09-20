import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qdzlv6exs.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="qdzlv6exs"/>`,
		"fallback": "pajamas:arrow-up",
	});
}

export default Component;
