import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gz9xx8brk.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="gz9xx8brk"/>`,
		"fallback": "gravity-ui:face-fun",
	});
}

export default Component;
