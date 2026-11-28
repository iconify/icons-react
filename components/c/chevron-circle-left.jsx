import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vcf9opbvf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vcf9opbvf"/>`,
		"fallback": "noviair:chevron-circle-left",
	});
}

export default Component;
