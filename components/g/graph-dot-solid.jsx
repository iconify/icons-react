import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ur-7fqmse.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ur-7fqmse"/>`,
		"fallback": "streamline-plump:graph-dot-solid",
	});
}

export default Component;
