import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/csnou1l8n.css';
import '../../css/z/z6oybf-di.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="csnou1l8n"/><path class="z6oybf-di"/>`,
		"fallback": "vaadin:bug-o",
	});
}

export default Component;
