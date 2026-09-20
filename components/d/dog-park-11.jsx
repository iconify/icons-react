import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r9_od2b9f.css';

const viewBox = {"width":11,"height":11};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r9_od2b9f"/>`,
		"fallback": "maki:dog-park-11",
	});
}

export default Component;
