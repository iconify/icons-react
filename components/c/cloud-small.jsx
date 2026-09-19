import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eee2krb3x.css';

const viewBox = {"width":10,"height":10};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eee2krb3x"/>`,
		"fallback": "codicon:cloud-small",
	});
}

export default Component;
