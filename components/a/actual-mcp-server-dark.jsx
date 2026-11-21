import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qhjc_3plp.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qhjc_3plp"/>`,
		"fallback": "selfhst:actual-mcp-server-dark",
	});
}

export default Component;
