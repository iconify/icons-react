import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8hbf0lfj.css';
import '../../css/b/bw5sq60eg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n8hbf0lfj"/><path class="bw5sq60eg"/>`,
		"fallback": "lucide-extended:inbox-filled",
	});
}

export default Component;
