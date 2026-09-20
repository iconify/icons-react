import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n9xurqb5w.css';

const viewBox = {"width":1000,"height":1000};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="n9xurqb5w"/>`,
		"fallback": "thesvg-color:hashnode",
	});
}

export default Component;
