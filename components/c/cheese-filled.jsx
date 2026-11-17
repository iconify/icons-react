import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/ww0sxhtpg.css';
import '../../css/s/skhazup6f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ww0sxhtpg"/><path class="skhazup6f"/>`,
		"fallback": "lucide-extended:cheese-filled",
	});
}

export default Component;
