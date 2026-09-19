import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jjcg_zb7r.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jjcg_zb7r"/>`,
		"fallback": "bi:filetype-yml",
	});
}

export default Component;
