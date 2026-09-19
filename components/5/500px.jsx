import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/brpb07v6g.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="brpb07v6g"/>`,
		"fallback": "icomoon-free:500px",
	});
}

export default Component;
