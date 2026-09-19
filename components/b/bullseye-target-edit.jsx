import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yabg5hb7y.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yabg5hb7y"/>`,
		"fallback": "fluent-mdl2:bullseye-target-edit",
	});
}

export default Component;
