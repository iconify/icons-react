import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mbiaeacws.css';
import '../../css/h/hjy0wjyzq.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mbiaeacws"/><path class="hjy0wjyzq"/>`,
		"fallback": "selfhst:fileflows-forge-dark",
	});
}

export default Component;
