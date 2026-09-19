import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zwkbxxb3f.css';
import '../../css/f/fkq9d_i7u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zwkbxxb3f"/><path class="fkq9d_i7u"/>`,
		"fallback": "gridicons:history",
	});
}

export default Component;
