import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a27-2bahm.css';
import '../../css/i/i1hgre67m.css';
import '../../css/k/kac4dlpam.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a27-2bahm"/><path class="i1hgre67m"/><path class="kac4dlpam"/>`,
		"fallback": "energy-icons:igloo-20",
	});
}

export default Component;
