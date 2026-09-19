import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jhazw7j6k.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="jhazw7j6k"/>`,
		"fallback": "gravity-ui:envelope-open-xmark",
	});
}

export default Component;
