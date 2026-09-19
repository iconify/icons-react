import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ylf8t4bhr.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ylf8t4bhr"/>`,
		"fallback": "healthicons:2",
	});
}

export default Component;
