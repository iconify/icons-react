import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y7c8n5bpv.css';
import '../../css/o/obndhi7my.css';
import '../../css/i/itu66bbfs.css';
import '../../css/f/f2mixfbea.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y7c8n5bpv"/><path class="obndhi7my"/><path class="itu66bbfs"/><path class="f2mixfbea"/>`,
		"fallback": "energy-icons:gem-20",
	});
}

export default Component;
