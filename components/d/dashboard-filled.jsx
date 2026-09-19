import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cfry528fm.css';
import '../../css/i/iudisjbgy.css';
import '../../css/h/h0r4iwbjo.css';
import '../../css/p/p1e45sl2p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<rect class="cfry528fm"/><rect class="iudisjbgy"/><rect class="h0r4iwbjo"/><rect class="p1e45sl2p"/>`,
		"fallback": "boxicons:dashboard-filled",
	});
}

export default Component;
