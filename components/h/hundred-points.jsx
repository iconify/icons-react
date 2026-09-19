import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/enll67bjt.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="enll67bjt"/>`,
		"fallback": "fluent-emoji-flat:hundred-points",
	});
}

export default Component;
