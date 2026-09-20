import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/k/kztr4db3g.css';
import '../../css/c/c8m1a62nx.css';
import '../../css/g/g2v8rwb8b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><path class="kztr4db3g"/><path class="c8m1a62nx"/><path class="g2v8rwb8b"/></g>`,
		"fallback": "streamline-logos:gabbr-logo",
	});
}

export default Component;
