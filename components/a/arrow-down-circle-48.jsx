import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hac57wbhi.css';
import '../../css/l/lajtdm1vq.css';
import '../../css/l/l0epb3h2m.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hac57wbhi"/><path class="lajtdm1vq"/><path class="l0epb3h2m"/>`,
		"fallback": "energy-icons:arrow-down-circle-48",
	});
}

export default Component;
