import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x4iq45b8p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x4iq45b8p"/>`,
		"fallback": "lucide-extended:git-merge-conflict-filled",
	});
}

export default Component;
