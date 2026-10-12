import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zoxpwbb0y.css';
import '../../css/b/b1-hh0bot.css';
import '../../css/s/s2otf6w0u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zoxpwbb0y"/><path clip-rule="evenodd" class="b1-hh0bot"/><path class="s2otf6w0u"/>`,
		"fallback": "lucide-extended:credit-card-plus-filled",
	});
}

export default Component;
