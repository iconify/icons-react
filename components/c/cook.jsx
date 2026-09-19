import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e9r4x3jzv.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e9r4x3jzv"/>`,
		"fallback": "icon-park-outline:cook",
	});
}

export default Component;
