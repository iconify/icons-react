import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c-x2wsljl.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="c-x2wsljl"/>`,
		"fallback": "streamline-plump:call-center-support-service-solid",
	});
}

export default Component;
