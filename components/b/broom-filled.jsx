import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m2v3pubwq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m2v3pubwq"/>`,
		"fallback": "lucide-extended:broom-filled",
	});
}

export default Component;
