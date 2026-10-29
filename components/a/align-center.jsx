import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gi7onfq8a.css';
import '../../css/a/azkasfb2o.css';
import '../../css/g/gzejcj1pe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gi7onfq8a wm-shadow"/><path class="azkasfb2o wm-k"/><path class="gzejcj1pe wm-k"/>`,
		"fallback": "withicons-pastel:align-center",
	});
}

export default Component;
