import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o_1d1rbat.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG9H518cyu"><path class="o_1d1rbat"/></mask></defs><path mask="url(#SVG9H518cyu)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:book-open",
	});
}

export default Component;
