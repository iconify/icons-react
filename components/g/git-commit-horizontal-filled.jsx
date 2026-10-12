import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/crlsv-b4n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="crlsv-b4n"/>`,
		"fallback": "lucide-extended:git-commit-horizontal-filled",
	});
}

export default Component;
