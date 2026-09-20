import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l6vd6sc8j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l6vd6sc8j"/>`,
		"fallback": "typcn:document-delete",
	});
}

export default Component;
