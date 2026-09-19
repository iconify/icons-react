import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/htifq4bwh.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="htifq4bwh"/>`,
		"fallback": "gravity-ui:circle-letter-e",
	});
}

export default Component;
