import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ortm4mvgl.css';

const viewBox = {"width":175.748,"height":105.761};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ortm4mvgl"/>`,
		"fallback": "thesvg-color:air-algerie",
	});
}

export default Component;
