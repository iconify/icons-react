import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yrg2b27ox.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yrg2b27ox"/>`,
		"fallback": "lucide-extended:git-pull-request-filled",
	});
}

export default Component;
