import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/ghoo0wryx.css';
import '../../css/a/a7p7lmknu.css';
import '../../css/i/iipwn-b9p.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ghoo0wryx"/><path class="a7p7lmknu"/><path class="iipwn-b9p"/>`,
		"fallback": "energy-icons:emergency-exit-20",
	});
}

export default Component;
