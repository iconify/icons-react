import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rw_vg6b8p.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rw_vg6b8p"/>`,
		"fallback": "fluent-mdl2:bulleted-list-2",
	});
}

export default Component;
