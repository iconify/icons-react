import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fpfoayb6f.css';
import '../../css/z/zp19y9ojo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="fpfoayb6f"/><path class="zp19y9ojo"/>`,
		"fallback": "lucide-extended:bell-electric-filled",
	});
}

export default Component;
