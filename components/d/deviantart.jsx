import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bg7z6eq8h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bg7z6eq8h"/>`,
		"fallback": "meteor-icons:deviantart",
	});
}

export default Component;
