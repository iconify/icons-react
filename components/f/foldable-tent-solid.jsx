import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ag-h2id7r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ag-h2id7r"/>`,
		"fallback": "iconaut:foldable-tent-solid",
	});
}

export default Component;
