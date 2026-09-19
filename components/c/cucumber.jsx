import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lp2zqlb5m.css';

const viewBox = {"width":435,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="lp2zqlb5m"/>`,
		"fallback": "file-icons:cucumber",
	});
}

export default Component;
