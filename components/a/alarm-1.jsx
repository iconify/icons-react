import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u0piq7bju.css';
import '../../css/j/jqhsxpb4d.css';
import '../../css/r/rztgfrb4g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u0piq7bju"/><path class="jqhsxpb4d"/><path clip-rule="evenodd" class="rztgfrb4g"/>`,
		"fallback": "lineicons:alarm-1",
	});
}

export default Component;
