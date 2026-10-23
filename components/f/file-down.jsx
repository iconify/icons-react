import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zehk59bje.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zehk59bje"/>`,
		"fallback": "vadivam:file-down",
	});
}

export default Component;
