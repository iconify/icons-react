import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ahba87blp.css';
import '../../css/v/vmcevybnu.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ahba87blp"/><path class="vmcevybnu"/>`,
		"fallback": "selfhst:inexogy",
	});
}

export default Component;
