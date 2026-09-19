import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b-qmbybjd.css';
import '../../css/z/z8okc2lzd.css';
import '../../css/k/k12ktmbqv.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b-qmbybjd"/><circle class="z8okc2lzd"/><path class="k12ktmbqv"/>`,
		"fallback": "carbon:application-mobile",
	});
}

export default Component;
