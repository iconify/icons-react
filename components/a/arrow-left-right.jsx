import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ag-g8fbxw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ag-g8fbxw"/>`,
		"fallback": "vadivam:arrow-left-right",
	});
}

export default Component;
