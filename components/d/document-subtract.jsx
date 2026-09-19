import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/utg4a_brp.css';
import '../../css/o/o104vdwci.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="utg4a_brp"/><path class="o104vdwci"/>`,
		"fallback": "carbon:document-subtract",
	});
}

export default Component;
