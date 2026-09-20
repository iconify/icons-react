import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bdydk6bsy.css';

const viewBox = {"width":30,"height":30};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bdydk6bsy"/>`,
		"fallback": "material-icon-theme:erlang",
	});
}

export default Component;
