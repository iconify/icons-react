import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u5a9jpbql.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u5a9jpbql"/>`,
		"fallback": "iconaut:a-large-small-solid",
	});
}

export default Component;
