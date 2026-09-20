import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bj5kz30al.css';
import '../../css/n/nj0ynib6i.css';
import '../../css/r/r_993qgax.css';
import '../../css/u/ume3owb3n.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bj5kz30al"/><path class="nj0ynib6i"/><path class="r_993qgax"/><path class="ume3owb3n"/>`,
		"fallback": "material-icon-theme:dart",
	});
}

export default Component;
