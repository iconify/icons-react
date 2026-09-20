import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bbk12mtzc.css';

const viewBox = {"width":24,"height":24,"left":-4,"top":-2};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bbk12mtzc"/>`,
		"fallback": "jam:file-f",
	});
}

export default Component;
