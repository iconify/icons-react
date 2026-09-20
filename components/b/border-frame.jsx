import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ecydzj17y.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ecydzj17y"/>`,
		"fallback": "streamline-plump:border-frame",
	});
}

export default Component;
