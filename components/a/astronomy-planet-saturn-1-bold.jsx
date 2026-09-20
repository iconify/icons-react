import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uf2ng0bxv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uf2ng0bxv"/>`,
		"fallback": "streamline-ultimate:astronomy-planet-saturn-1-bold",
	});
}

export default Component;
