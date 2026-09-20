import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dd6no_7gl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dd6no_7gl"/>`,
		"fallback": "thesvg-color:apache-parquet",
	});
}

export default Component;
