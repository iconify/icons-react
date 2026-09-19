import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iii9krbbr.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iii9krbbr"/>`,
		"fallback": "fa7-solid:group-arrows-rotate",
	});
}

export default Component;
