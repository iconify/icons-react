import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gs9ssqz_r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gs9ssqz_r"/>`,
		"fallback": "withicons-bauhaus:git-fork",
	});
}

export default Component;
