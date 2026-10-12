import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kqx4n9nhq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kqx4n9nhq"/>`,
		"fallback": "lucide-extended:git-compare-arrows-filled",
	});
}

export default Component;
