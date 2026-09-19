import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hs8yq5bpe.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hs8yq5bpe"/>`,
		"fallback": "fa7-solid:faucet-drip",
	});
}

export default Component;
