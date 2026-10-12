import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ano5szbdx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ano5szbdx"/>`,
		"fallback": "lucide-extended:git-pull-request-arrow-filled",
	});
}

export default Component;
