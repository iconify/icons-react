import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nb_0tkhsy.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nb_0tkhsy"/>`,
		"fallback": "pinhead:2",
	});
}

export default Component;
