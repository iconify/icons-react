import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o_v22q00v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o_v22q00v"/>`,
		"fallback": "thesvg-color:dbrx-databricks",
	});
}

export default Component;
