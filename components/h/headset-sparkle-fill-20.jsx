import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sl_le4c4m.css';
import '../../css/k/k0kzc1obh.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sl_le4c4m"/><path class="k0kzc1obh"/>`,
		"fallback": "garden:headset-sparkle-fill-20",
	});
}

export default Component;
