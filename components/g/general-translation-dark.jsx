import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b0o537bra.css';

const viewBox = {"width":215.696,"height":215.696,"left":20.152,"top":20.152};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b0o537bra"/>`,
		"fallback": "thesvg-color:general-translation-dark",
	});
}

export default Component;
