import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tt1rgy1os.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="tt1rgy1os"/>`,
		"fallback": "ix:firmware",
	});
}

export default Component;
