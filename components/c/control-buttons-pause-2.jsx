import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g5ousf9rq.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="g5ousf9rq"/>`,
		"fallback": "streamline-block:control-buttons-pause-2",
	});
}

export default Component;
