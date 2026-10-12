import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vjg-q19wd.css';
import '../../css/e/eqdi4qwvg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="vjg-q19wd"/><path class="eqdi4qwvg"/>`,
		"fallback": "lucide-extended:coffee-filled",
	});
}

export default Component;
