import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/shr813boy.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="shr813boy"/>`,
		"fallback": "selfhst:audiobookshelf-light",
	});
}

export default Component;
