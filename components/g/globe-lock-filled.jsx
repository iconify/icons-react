import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zxlfpzpjb.css';
import '../../css/f/fce5xcc5l.css';
import '../../css/h/hyt904_lx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zxlfpzpjb"/><path clip-rule="evenodd" class="fce5xcc5l"/><path class="hyt904_lx"/>`,
		"fallback": "lucide-extended:globe-lock-filled",
	});
}

export default Component;
