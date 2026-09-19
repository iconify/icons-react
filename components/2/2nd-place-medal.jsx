import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/ie17f1jot.css';
import '../../css/v/vrn1zheyn.css';
import '../../css/v/vrpbmw-0a.css';
import '../../css/g/gvsavvb4f.css';
import '../../css/a/axd83acze.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ie17f1jot"/><path class="vrn1zheyn"/><path class="vrpbmw-0a"/><path class="gvsavvb4f"/><path class="axd83acze"/></g>`,
		"fallback": "fluent-emoji-flat:2nd-place-medal",
	});
}

export default Component;
