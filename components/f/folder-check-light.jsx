import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/shu_wxu_p.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="shu_wxu_p"/>`,
		"fallback": "pullo:folder-check-light",
	});
}

export default Component;
