import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r01fabc7a.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r01fabc7a"/>`,
		"fallback": "ion:android-map",
	});
}

export default Component;
