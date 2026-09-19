import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pfz0krbbm.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="pfz0krbbm"/>`,
		"fallback": "pepicons:cloud-up-filled",
	});
}

export default Component;
