import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z7h54nblt.css';
import '../../css/y/yad7u38_l.css';

const viewBox = {"width":138,"height":136.1};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z7h54nblt"/><path class="yad7u38_l"/>`,
		"fallback": "thesvg-color:infojobs",
	});
}

export default Component;
