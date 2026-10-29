import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bcnyyb28t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bcnyyb28t"/>`,
		"fallback": "withicons:hard-drive-solid",
	});
}

export default Component;
