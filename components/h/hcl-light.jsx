import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pw9st_b5f.css';
import '../../css/f/f7jhyeftq.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pw9st_b5f"/><path class="f7jhyeftq"/>`,
		"fallback": "material-icon-theme:hcl-light",
	});
}

export default Component;
