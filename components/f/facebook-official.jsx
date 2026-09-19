import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ne73j3bjb.css';

const viewBox = {"width":1536,"height":1536};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ne73j3bjb"/>`,
		"fallback": "fa:facebook-official",
	});
}

export default Component;
