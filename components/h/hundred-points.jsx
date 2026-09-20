import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t69l_3jve.css';
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
		"content": `<defs><path id="SVGc4SZ0cCp" class="t69l_3jve"/></defs><use href="#SVGc4SZ0cCp" class="wd-ix_sxa"/><use href="#SVGc4SZ0cCp" class="eh35uyflb"/>`,
		"fallback": "openmoji:hundred-points",
	});
}

export default Component;
