import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v73kcqc0a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v73kcqc0a"/>`,
		"fallback": "withicons:avatar-woman-curly-solid",
	});
}

export default Component;
