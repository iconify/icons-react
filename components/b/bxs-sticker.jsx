import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ui62x8afp.css';
import '../../css/z/za24chbrg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ui62x8afp"/><path class="za24chbrg"/>`,
		"fallback": "bx:bxs-sticker",
	});
}

export default Component;
