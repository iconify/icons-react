import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o4oss2bsv.css';
import '../../css/h/hkly8r6yp.css';
import '../../css/x/x3tzvpboa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o4oss2bsv wm-k"/><path class="hkly8r6yp wm-k"/><path class="wm-k x3tzvpboa"/>`,
		"fallback": "withicons-bauhaus:bold",
	});
}

export default Component;
