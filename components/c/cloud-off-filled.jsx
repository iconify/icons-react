import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zs_74ac8w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zs_74ac8w"/>`,
		"fallback": "lucide-extended:cloud-off-filled",
	});
}

export default Component;
