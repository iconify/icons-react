import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bbk531b9v.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="bbk531b9v"/>`,
		"fallback": "gravity-ui:circle-letter-m",
	});
}

export default Component;
