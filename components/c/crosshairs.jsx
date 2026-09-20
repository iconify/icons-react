import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kiqygcc1r.css';
import '../../css/a/a5ptkn1rg.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kiqygcc1r"/><path class="a5ptkn1rg"/>`,
		"fallback": "vaadin:crosshairs",
	});
}

export default Component;
