import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bq-kfj9bh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bq-kfj9bh"/>`,
		"fallback": "noviair:candy",
	});
}

export default Component;
