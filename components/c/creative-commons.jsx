import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kalrokb5f.css';

const viewBox = {"width":1792,"height":1792};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kalrokb5f"/>`,
		"fallback": "fa:creative-commons",
	});
}

export default Component;
