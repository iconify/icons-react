import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kkit6zbrq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kkit6zbrq"/>`,
		"fallback": "thesvg-color:gplv3",
	});
}

export default Component;
