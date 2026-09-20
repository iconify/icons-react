import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mr-knn1jh.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="mr-knn1jh"/>`,
		"fallback": "streamline-plump:ai-science-robot-solid",
	});
}

export default Component;
