import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mvs93ubio.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mvs93ubio"/>`,
		"fallback": "lucide-extended:git-pull-request-create-arrow-filled",
	});
}

export default Component;
