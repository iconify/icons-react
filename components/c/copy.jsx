import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hg7hkub_p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hg7hkub_p"/>`,
		"fallback": "vadivam:copy",
	});
}

export default Component;
