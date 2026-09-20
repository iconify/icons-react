import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yskdjvg4w.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yskdjvg4w"/>`,
		"fallback": "selfhst:asterisk-light",
	});
}

export default Component;
