import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kb9ajhbky.css';
import '../../css/w/w_7rm3j9j.css';
import '../../css/f/f_t5h2bth.css';
import '../../css/i/i2ck-cb3c.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kb9ajhbky"/><path class="w_7rm3j9j"/><path class="f_t5h2bth"/><path class="i2ck-cb3c"/>`,
		"fallback": "carbon:annotation-visibility",
	});
}

export default Component;
