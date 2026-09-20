import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ac-lxcc5p.css';
import '../../css/o/ofxdamrpd.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ac-lxcc5p"/><path class="ofxdamrpd"/>`,
		"fallback": "lsicon:chips-filled",
	});
}

export default Component;
