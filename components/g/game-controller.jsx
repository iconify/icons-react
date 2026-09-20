import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/daolku9bq.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="daolku9bq"/>`,
		"fallback": "simple-line-icons:game-controller",
	});
}

export default Component;
