import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/w/wcqf_cbga.css';
import '../../css/x/xu7e5sqmi.css';
import '../../css/h/h3xchhb6n.css';
import '../../css/b/b2e5_3blm.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="wcqf_cbga"/><path class="xu7e5sqmi"/><path class="h3xchhb6n"/><path class="b2e5_3blm"/></g>`,
		"fallback": "streamline-plump-color:hierarchy-15",
	});
}

export default Component;
