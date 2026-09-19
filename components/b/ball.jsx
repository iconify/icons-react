import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ngtu_95cw.css';
import '../../css/f/fqk5odb6q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ngtu_95cw"/><path class="fqk5odb6q"/>`,
		"fallback": "bx:ball",
	});
}

export default Component;
