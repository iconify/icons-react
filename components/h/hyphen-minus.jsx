import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zg9vbp76i.css';
import '../../css/i/ilkd3ex7e.css';
import '../../css/w/wo110wbto.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zg9vbp76i"/><path class="ilkd3ex7e"/><path class="wo110wbto"/>`,
		"fallback": "openmoji:hyphen-minus",
	});
}

export default Component;
