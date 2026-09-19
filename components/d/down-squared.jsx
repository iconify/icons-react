import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tny7lbc-v.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tny7lbc-v"/>`,
		"fallback": "icons8:down-squared",
	});
}

export default Component;
