import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qur1wlvih.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qur1wlvih"/>`,
		"fallback": "grommet-icons:form-checkmark",
	});
}

export default Component;
