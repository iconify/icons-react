import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oqf5vsmca.css';
import '../../css/d/ddaib_rgx.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oqf5vsmca"/><path class="ddaib_rgx"/>`,
		"fallback": "cil:cloud-download",
	});
}

export default Component;
