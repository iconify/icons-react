import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a4yex3z8a.css';
import '../../css/u/uwvg1pb6m.css';
import '../../css/d/dlp7nstpk.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="a4yex3z8a"/><path class="uwvg1pb6m"/><circle class="dlp7nstpk"/>`,
		"fallback": "carbon:hardware-security-module",
	});
}

export default Component;
