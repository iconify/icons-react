import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yyjo58brx.css';
import '../../css/o/or0-msbfm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wm-k yyjo58brx"/><path class="or0-msbfm wm-a"/>`,
		"fallback": "withicons-bauhaus:circle-dot",
	});
}

export default Component;
