import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m81fq80ly.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="m81fq80ly"/>`,
		"fallback": "pajamas:attention",
	});
}

export default Component;
