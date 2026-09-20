import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sy6dq3bbv.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="sy6dq3bbv"/>`,
		"fallback": "streamline-plump-color:button-power-1-flat",
	});
}

export default Component;
