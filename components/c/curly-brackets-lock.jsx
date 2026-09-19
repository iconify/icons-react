import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o4z2qobvk.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="o4z2qobvk"/>`,
		"fallback": "gravity-ui:curly-brackets-lock",
	});
}

export default Component;
