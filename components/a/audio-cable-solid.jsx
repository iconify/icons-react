import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xeb407i0o.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xeb407i0o"/>`,
		"fallback": "teenyicons:audio-cable-solid",
	});
}

export default Component;
