import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/um7_4ac7p.css';
import '../../css/k/kfueumbyk.css';
import '../../css/p/p98w-ymbv.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<rect class="um7_4ac7p"/><rect class="kfueumbyk"/><path class="p98w-ymbv"/>`,
		"fallback": "selfhst:besucherlogin",
	});
}

export default Component;
