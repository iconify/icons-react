import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zieuvnddo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zieuvnddo"/>`,
		"fallback": "reicon:creative-commons-filled",
	});
}

export default Component;
