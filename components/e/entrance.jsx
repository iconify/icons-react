import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oc7qydb_d.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oc7qydb_d"/>`,
		"fallback": "maki:entrance",
	});
}

export default Component;
