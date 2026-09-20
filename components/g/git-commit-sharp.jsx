import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v_f-9jb_k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v_f-9jb_k"/>`,
		"fallback": "pixelarticons:git-commit-sharp",
	});
}

export default Component;
