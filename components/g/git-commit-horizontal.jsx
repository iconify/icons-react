import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/spnly9btv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="spnly9btv"/>`,
		"fallback": "keyline-icons:git-commit-horizontal",
	});
}

export default Component;
