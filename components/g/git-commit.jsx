import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tcuquob1a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tcuquob1a"/>`,
		"fallback": "boxicons:git-commit",
	});
}

export default Component;
