import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xkqd60bly.css';
import '../../css/y/y_icihb5j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="xkqd60bly"/><path class="y_icihb5j"/>`,
		"fallback": "lucide-extended:cloud-cog-filled",
	});
}

export default Component;
