import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipkul0x-y.css';
import '../../css/k/kprce0ijz.css';
import '../../css/x/x8r3bo3uc.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ipkul0x-y"/><path class="kprce0ijz"/><path class="x8r3bo3uc"/>`,
		"fallback": "carbon:data-enrichment-add",
	});
}

export default Component;
