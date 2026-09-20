import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h5_kvrb6b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h5_kvrb6b"/>`,
		"fallback": "ri:file-list-3-fill",
	});
}

export default Component;
