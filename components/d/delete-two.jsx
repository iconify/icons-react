import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lt1r6l-8y.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lt1r6l-8y"/>`,
		"fallback": "icon-park-outline:delete-two",
	});
}

export default Component;
