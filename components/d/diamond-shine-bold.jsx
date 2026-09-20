import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vpsm0gbvv.css';
import '../../css/v/vcqh7-btg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vpsm0gbvv"/><path class="vcqh7-btg"/>`,
		"fallback": "streamline-ultimate:diamond-shine-bold",
	});
}

export default Component;
