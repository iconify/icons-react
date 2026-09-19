import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oovqvoxkv.css';
import '../../css/k/k_u3wubkw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oovqvoxkv"/><path class="k_u3wubkw"/>`,
		"fallback": "eva:compass-fill",
	});
}

export default Component;
