import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/grb84xddd.css';
import '../../css/w/wd-ix_sxa.css';
import '../../css/e/eh35uyflb.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><path id="SVGrg9cCcwZ" class="grb84xddd"/></defs><use href="#SVGrg9cCcwZ" class="wd-ix_sxa"/><use href="#SVGrg9cCcwZ" class="eh35uyflb"/>`,
		"fallback": "openmoji:hundred-points",
	});
}

export default Component;
