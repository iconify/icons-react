import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/ht4j-tbyp.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ht4j-tbyp"/>`,
		"fallback": "gravity-ui:circle-info-fill",
	});
}

export default Component;
