import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xg-os2b_i.css';
import '../../css/n/n3ia57pse.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xg-os2b_i"/><path class="n3ia57pse"/>`,
		"fallback": "energy-icons:clipboard-list-20",
	});
}

export default Component;
