import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eahow9bvc.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eahow9bvc"/>`,
		"fallback": "subway:down-arrow-1",
	});
}

export default Component;
