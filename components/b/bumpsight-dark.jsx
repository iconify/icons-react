import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xxmz3ienn.css';
import '../../css/w/wm9w19bdd.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<ellipse class="xxmz3ienn"/><path class="wm9w19bdd"/>`,
		"fallback": "selfhst:bumpsight-dark",
	});
}

export default Component;
