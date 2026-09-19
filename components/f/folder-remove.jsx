import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sg4qicc_f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sg4qicc_f"/>`,
		"fallback": "iconamoon:folder-remove",
	});
}

export default Component;
