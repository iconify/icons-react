import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ewinqubjx.css';
import '../../css/j/js6qhmbex.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ewinqubjx"/><path class="js6qhmbex"/>`,
		"fallback": "selfhst:dailytxt",
	});
}

export default Component;
