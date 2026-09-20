import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/od1x1ly1f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="od1x1ly1f"/>`,
		"fallback": "ri:file-search-line",
	});
}

export default Component;
