import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mstr9jbxl.css';
import '../../css/d/dtz_ylbin.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="duoicon-primary-layer mstr9jbxl"/><path class="dtz_ylbin duoicon-secondary-layer"/>`,
		"fallback": "duo-icons:bug",
	});
}

export default Component;
