import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c7y5wkl1s.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c7y5wkl1s"/>`,
		"fallback": "streamline-plump:delete-bookmark",
	});
}

export default Component;
