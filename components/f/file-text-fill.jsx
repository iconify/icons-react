import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pco8b6b0q.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pco8b6b0q"/>`,
		"fallback": "ant-design:file-text-fill",
	});
}

export default Component;
