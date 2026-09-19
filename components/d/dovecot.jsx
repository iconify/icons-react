import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nyjz57b0u.css';
import '../../css/h/h124n3njl.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nyjz57b0u"/><path class="h124n3njl"/>`,
		"fallback": "devicon:dovecot",
	});
}

export default Component;
