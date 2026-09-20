import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q3gl-5byj.css';
import '../../css/a/aepino0ac.css';
import '../../css/g/go-_ugbik.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q3gl-5byj"/><path class="aepino0ac"/><path class="go-_ugbik"/>`,
		"fallback": "material-icon-theme:bruno",
	});
}

export default Component;
