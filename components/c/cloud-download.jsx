import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iqe986v7z.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iqe986v7z"/>`,
		"fallback": "icomoon-free:cloud-download",
	});
}

export default Component;
