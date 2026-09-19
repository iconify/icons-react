import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nzr-oab9a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nzr-oab9a"/>`,
		"fallback": "ci:edit-pencil-line-02",
	});
}

export default Component;
