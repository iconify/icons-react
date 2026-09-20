import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b6k6h2o9k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b6k6h2o9k"/>`,
		"fallback": "simple-icons:gameandwatch",
	});
}

export default Component;
