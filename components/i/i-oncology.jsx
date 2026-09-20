import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g6--_rptg.css';
import '../../css/a/a9ty3crzj.css';
import '../../css/w/w8gx8xbkp.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g6--_rptg"/><path class="a9ty3crzj"/><path class="w8gx8xbkp"/>`,
		"fallback": "medical-icon:i-oncology",
	});
}

export default Component;
