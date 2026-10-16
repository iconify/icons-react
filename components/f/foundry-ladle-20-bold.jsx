import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ebt602b4h.css';
import '../../css/n/n_bvk3qzv.css';
import '../../css/y/yfoxxnbix.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ebt602b4h"/><path class="n_bvk3qzv"/><path class="yfoxxnbix"/>`,
		"fallback": "energy-icons:foundry-ladle-20-bold",
	});
}

export default Component;
