import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hoz3r3bes.css';
import '../../css/y/ycqomi9-f.css';
import '../../css/v/vvstocchj.css';
import '../../css/z/z9gopggrv.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hoz3r3bes"/><path class="ycqomi9-f"/><path class="vvstocchj"/><circle class="z9gopggrv"/>`,
		"fallback": "ooui:image-gallery-ltr",
	});
}

export default Component;
