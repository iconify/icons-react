import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uj2squb5k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="uj2squb5k"/>`,
		"fallback": "lucide-extended:anvil-filled",
	});
}

export default Component;
