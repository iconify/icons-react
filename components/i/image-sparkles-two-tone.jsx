import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/p17ta5bkl.css';
import '../../css/o/o472wkbka.css';
import '../../css/z/zxdzj-r_r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="p17ta5bkl"/><path class="o472wkbka"/><path class="zxdzj-r_r"/></g>`,
		"fallback": "keyline-icons:image-sparkles-two-tone",
	});
}

export default Component;
