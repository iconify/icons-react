import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zwkw435-x.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="zwkw435-x"/>`,
		"fallback": "pajamas:doc-expand",
	});
}

export default Component;
