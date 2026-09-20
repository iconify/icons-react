import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/b1t-tnykf.css';
import '../../css/z/zxez03plr.css';
import '../../css/c/cb8jqtalf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><circle class="b1t-tnykf"/><circle class="zxez03plr"/><path class="cb8jqtalf"/></g>`,
		"fallback": "meteor-icons:gumroad",
	});
}

export default Component;
