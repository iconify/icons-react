import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vuujibcul.css';
import '../../css/k/kzsue3_rw.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vuujibcul"/><path class="kzsue3_rw"/>`,
		"fallback": "selfhst:baidu",
	});
}

export default Component;
