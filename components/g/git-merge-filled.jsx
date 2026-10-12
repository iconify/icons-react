import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hwe_18keh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hwe_18keh"/>`,
		"fallback": "lucide-extended:git-merge-filled",
	});
}

export default Component;
