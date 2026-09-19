import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b918m_bmv.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="b918m_bmv"/>`,
		"fallback": "ion:arrow-down-right-box-sharp",
	});
}

export default Component;
