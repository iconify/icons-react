import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/by87w4spn.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="by87w4spn"/>`,
		"fallback": "teenyicons:folder-minus-solid",
	});
}

export default Component;
