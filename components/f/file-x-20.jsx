import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d-g74icta.css';
import '../../css/r/r4kevhbfq.css';
import '../../css/l/lktv4abld.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d-g74icta"/><path class="r4kevhbfq"/><path class="lktv4abld"/>`,
		"fallback": "energy-icons:file-x-20",
	});
}

export default Component;
