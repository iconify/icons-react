import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zmlnfs7bu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zmlnfs7bu"/>`,
		"fallback": "vadivam:badge-japanese-yen",
	});
}

export default Component;
