import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kknlrobqv.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="kknlrobqv"/>`,
		"fallback": "streamline-plump:browser-code-1-solid",
	});
}

export default Component;
