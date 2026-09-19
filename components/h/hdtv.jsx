import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/afl_yub5g.css';

const viewBox = {"width":1025,"height":832};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="afl_yub5g"/>`,
		"fallback": "whh:hdtv",
	});
}

export default Component;
