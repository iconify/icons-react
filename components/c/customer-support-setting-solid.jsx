import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fta2jcb7k.css';
import '../../css/s/s-yjq38cr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fta2jcb7k"/><path clip-rule="evenodd" class="s-yjq38cr"/>`,
		"fallback": "streamline-sharp:customer-support-setting-solid",
	});
}

export default Component;
