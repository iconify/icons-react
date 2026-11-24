import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/by5-f4bvs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="by5-f4bvs"/>`,
		"fallback": "lucide-extended:currency-filled",
	});
}

export default Component;
