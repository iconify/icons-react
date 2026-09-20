import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sh2rg2bpe.css';
import '../../css/i/i9gf5actf.css';
import '../../css/e/e2wi94ygl.css';

const viewBox = {"width":140,"height":140};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g transform="translate(10.508 10.205)" class="sh2rg2bpe"><circle class="i9gf5actf"/><path class="e2wi94ygl"/></g>`,
		"fallback": "material-icon-theme:browserlist-light",
	});
}

export default Component;
