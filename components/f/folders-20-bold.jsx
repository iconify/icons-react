import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gw71h2bxe.css';
import '../../css/x/xkiivi_oa.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gw71h2bxe"/><path class="xkiivi_oa"/>`,
		"fallback": "energy-icons:folders-20-bold",
	});
}

export default Component;
