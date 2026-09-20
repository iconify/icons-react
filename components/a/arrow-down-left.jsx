import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a-bldqb1w.css';
import '../../css/m/m7lzhdc8k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a-bldqb1w"/><path class="m7lzhdc8k"/>`,
		"fallback": "uim:arrow-down-left",
	});
}

export default Component;
