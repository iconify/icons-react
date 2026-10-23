import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rd7ki4cpg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rd7ki4cpg"/>`,
		"fallback": "vadivam:door-closed-package",
	});
}

export default Component;
