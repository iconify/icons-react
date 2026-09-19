import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qy2fjenpo.css';

const viewBox = {"width":1024,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qy2fjenpo"/>`,
		"fallback": "whh:commit",
	});
}

export default Component;
