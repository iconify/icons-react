import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v9tnq6bdy.css';
import '../../css/k/k9r7cbc0o.css';
import '../../css/g/gojllccbf.css';

const viewBox = {"width":13,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v9tnq6bdy"/><path class="k9r7cbc0o"/><path class="gojllccbf"/>`,
		"fallback": "formkit:avatarwoman",
	});
}

export default Component;
