import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eabl2c-zp.css';
import '../../css/l/lncpo0b-z.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eabl2c-zp"/><path class="lncpo0b-z"/>`,
		"fallback": "vaadin:coins",
	});
}

export default Component;
