import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pk07ylj0q.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="pk07ylj0q"/>`,
		"fallback": "gravity-ui:curly-brackets-function",
	});
}

export default Component;
