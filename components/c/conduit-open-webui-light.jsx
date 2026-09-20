import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mql_dwhrm.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mql_dwhrm"/>`,
		"fallback": "selfhst:conduit-open-webui-light",
	});
}

export default Component;
