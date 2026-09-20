import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/ms3yp7bvz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ms3yp7bvz"/>`,
		"fallback": "streamline-plump:ball-solid",
	});
}

export default Component;
