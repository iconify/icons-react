import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bq4qg5b-r.css';

const viewBox = {"width":1568,"height":1312};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bq4qg5b-r"/>`,
		"fallback": "fa:eject",
	});
}

export default Component;
