import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x9-ohxbke.css';
import '../../css/e/ehyq6ihjz.css';
import '../../css/q/qzrhlkbto.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="x9-ohxbke"/><circle class="ehyq6ihjz"/><path class="qzrhlkbto"/>`,
		"fallback": "famicons:cart",
	});
}

export default Component;
