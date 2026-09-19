import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cdof_xbaa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cdof_xbaa"/>`,
		"fallback": "hugeicons:file-empty-02",
	});
}

export default Component;
