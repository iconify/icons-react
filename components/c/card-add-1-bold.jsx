import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qew2lt_vn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="qew2lt_vn"/>`,
		"fallback": "streamline-ultimate:card-add-1-bold",
	});
}

export default Component;
