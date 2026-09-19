import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/actsv6yen.css';
import '../../css/l/ljarxcchb.css';
import '../../css/q/qtehtydtc.css';
import '../../css/q/qkqdoq0od.css';
import '../../css/l/lljzobcwc.css';
import '../../css/k/k9oz9h86c.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="actsv6yen"/><path class="ljarxcchb"/><path class="qtehtydtc"/><path class="qkqdoq0od"/><path class="lljzobcwc"/><path class="k9oz9h86c"/>`,
		"fallback": "flat-ui:calendar",
	});
}

export default Component;
