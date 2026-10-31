import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/x/x7yw7b4ee.css';
import '../../css/y/yu1z8nasx.css';
import '../../css/j/jl6c3gqpc.css';
import '../../css/s/sh_y4dbkz.css';
import '../../css/q/q7n43vb5t.css';
import '../../css/g/gpg9r0d5y.css';
import '../../css/j/jv7h2pbut.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="wm-shadow x7yw7b4ee"/><path class="yu1z8nasx"/><path class="jl6c3gqpc"/><path class="sh_y4dbkz"/><path class="q7n43vb5t"/><path class="gpg9r0d5y"/><path class="jv7h2pbut"/></g>`,
		"fallback": "withicons-brutal:avatar-girl",
	});
}

export default Component;
