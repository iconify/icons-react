import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vpunj9qsv.css';
import '../../css/d/dzeier91r.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vpunj9qsv"/><path clip-rule="evenodd" class="dzeier91r"/>`,
		"fallback": "teenyicons:book-solid",
	});
}

export default Component;
