import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bqmplqd4j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bqmplqd4j"/>`,
		"fallback": "lucide-extended:git-branch-filled",
	});
}

export default Component;
