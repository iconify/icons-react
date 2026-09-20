import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dqcn2nvil.css';
import '../../css/j/jufokfbnb.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dqcn2nvil"/><path class="jufokfbnb"/>`,
		"fallback": "selfhst:hortusfox",
	});
}

export default Component;
