import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qm2q14o2t.css';
import '../../css/c/czb5--bqu.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qm2q14o2t"/><path class="czb5--bqu"/>`,
		"fallback": "selfhst:contao",
	});
}

export default Component;
