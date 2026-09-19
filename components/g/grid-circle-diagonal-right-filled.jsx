import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d3ehty72y.css';
import '../../css/n/neukm1fuz.css';
import '../../css/g/gtn46m-jg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d3ehty72y"/><rect class="neukm1fuz"/><rect class="gtn46m-jg"/>`,
		"fallback": "boxicons:grid-circle-diagonal-right-filled",
	});
}

export default Component;
