import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jek51cc3p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jek51cc3p"/>`,
		"fallback": "pixelarticons:git-commit",
	});
}

export default Component;
