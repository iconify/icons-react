import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/da-5a4b7t.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="da-5a4b7t"/>`,
		"fallback": "fa6-regular:circle-xmark",
	});
}

export default Component;
