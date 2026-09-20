import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/a/a8nzzvbqe.css';
import '../../css/p/pr9pkgbgy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="a8nzzvbqe"/><path class="pr9pkgbgy"/></g>`,
		"fallback": "keyline-icons:flame-two-tone",
	});
}

export default Component;
