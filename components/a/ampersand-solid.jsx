import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zcwro9-_f.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="zcwro9-_f"/>`,
		"fallback": "streamline:ampersand-solid",
	});
}

export default Component;
