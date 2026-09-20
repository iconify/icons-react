import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/o/o8zpf4bdr.css';
import '../../css/s/ss12rki1s.css';
import '../../css/h/hgo7l_bim.css';
import '../../css/r/r_265ac6b.css';
import '../../css/g/gqpj6acni.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="o8zpf4bdr"/><path class="ss12rki1s"/><path class="hgo7l_bim"/><path class="r_265ac6b"/><path class="gqpj6acni"/></g>`,
		"fallback": "streamline-plump-color:customer-support-3",
	});
}

export default Component;
