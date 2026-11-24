import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/exokwfb4m.css';
import '../../css/s/skhazup6f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="exokwfb4m"/><path class="skhazup6f"/>`,
		"fallback": "lucide-extended:cheese-filled",
	});
}

export default Component;
