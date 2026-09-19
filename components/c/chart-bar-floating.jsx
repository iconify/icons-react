import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wo7uac-kj.css';
import '../../css/h/hgpzimtyu.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wo7uac-kj"/><path class="hgpzimtyu"/>`,
		"fallback": "carbon:chart-bar-floating",
	});
}

export default Component;
