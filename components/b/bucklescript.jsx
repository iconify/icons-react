import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mg2nk7h4t.css';
import '../../css/p/p5j9y8bnl.css';
import '../../css/k/kkgzrnb_y.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mg2nk7h4t"/><path class="p5j9y8bnl"/><path class="kkgzrnb_y"/>`,
		"fallback": "material-icon-theme:bucklescript",
	});
}

export default Component;
