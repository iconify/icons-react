import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o7f46ac0b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o7f46ac0b"/>`,
		"fallback": "streamline-ultimate:cloud-loading-bold",
	});
}

export default Component;
