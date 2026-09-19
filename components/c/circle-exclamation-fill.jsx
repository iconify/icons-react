import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/ju827ryyg.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ju827ryyg"/>`,
		"fallback": "gravity-ui:circle-exclamation-fill",
	});
}

export default Component;
