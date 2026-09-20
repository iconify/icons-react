import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zbf_zkbch.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zbf_zkbch"/>`,
		"fallback": "wpf:collaborator",
	});
}

export default Component;
