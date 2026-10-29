import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y85ekib7x.css';
import '../../css/h/hxit_dbdx.css';
import '../../css/h/ha4s3ccoz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wm-k y85ekib7x"/><path class="hxit_dbdx wm-s"/><path class="ha4s3ccoz wm-s"/>`,
		"fallback": "withicons-bauhaus:cloud-download",
	});
}

export default Component;
