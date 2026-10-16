import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/prpf4nbyc.css';
import '../../css/c/cvgo0ielg.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="prpf4nbyc"/><path class="cvgo0ielg"/>`,
		"fallback": "energy-icons:glacier-20",
	});
}

export default Component;
