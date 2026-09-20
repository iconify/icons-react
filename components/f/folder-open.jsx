import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/blxgbnb7y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="blxgbnb7y"/>`,
		"fallback": "tabler:folder-open",
	});
}

export default Component;
