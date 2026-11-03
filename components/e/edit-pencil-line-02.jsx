import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ao0f3ab2j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ao0f3ab2j"/>`,
		"fallback": "ci:edit-pencil-line-02",
	});
}

export default Component;
