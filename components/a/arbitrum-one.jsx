import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e9ivmoblp.css';
import '../../css/j/jometib-e.css';
import '../../css/z/z8r02ubit.css';
import '../../css/b/b4zfkkndr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e9ivmoblp"/><path class="jometib-e"/><path class="z8r02ubit"/><path class="b4zfkkndr"/>`,
		"fallback": "token:arbitrum-one",
	});
}

export default Component;
