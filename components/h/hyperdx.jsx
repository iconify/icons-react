import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/is4q307ov.css';
import '../../css/b/butkcj-uk.css';
import '../../css/o/osjgjnbpm.css';

const viewBox = {"width":260,"height":260};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><clipPath id="SVGw8YLyc4C"><rect class="is4q307ov"/></clipPath></defs><g clip-path="url(#SVGw8YLyc4C)"><path class="butkcj-uk"/><path class="osjgjnbpm"/></g></g>`,
		"fallback": "thesvg-color:hyperdx",
	});
}

export default Component;
