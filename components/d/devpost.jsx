import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zndtekn6f.css';
import '../../css/c/c1_dnpbek.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zndtekn6f"/><path class="c1_dnpbek"/>`,
		"fallback": "bxl:devpost",
	});
}

export default Component;
