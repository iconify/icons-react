import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cz90c6mjc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="cz90c6mjc"/>`,
		"fallback": "lucide-extended:clock-9-filled",
	});
}

export default Component;
