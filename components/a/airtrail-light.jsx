import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b2kge_box.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b2kge_box"/>`,
		"fallback": "selfhst:airtrail-light",
	});
}

export default Component;
