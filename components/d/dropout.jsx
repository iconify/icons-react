import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/htcr3kb3h.css';
import '../../css/a/ajkq-sngp.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="htcr3kb3h"/><path class="ajkq-sngp"/>`,
		"fallback": "selfhst:dropout",
	});
}

export default Component;
