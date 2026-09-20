import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b9e51dbyw.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="b9e51dbyw"/>`,
		"fallback": "streamline-plump:align-selection-solid",
	});
}

export default Component;
