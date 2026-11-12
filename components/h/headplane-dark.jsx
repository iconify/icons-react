import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b89dqjg6u.css';
import '../../css/h/h9o14dbik.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b89dqjg6u"/><path class="h9o14dbik"/>`,
		"fallback": "selfhst:headplane-dark",
	});
}

export default Component;
