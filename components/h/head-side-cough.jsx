import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lh0y2gb1s.css';
import '../../css/e/ebu-_wb0p.css';
import '../../css/q/qz5bn7pgu.css';
import '../../css/b/bupp6s2bh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="lh0y2gb1s"/><circle class="ebu-_wb0p"/><circle class="qz5bn7pgu"/><path class="bupp6s2bh"/>`,
		"fallback": "uim:head-side-cough",
	});
}

export default Component;
