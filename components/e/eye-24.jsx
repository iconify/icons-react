import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o-s2teb4v.css';
import '../../css/g/g7z41b4ky.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o-s2teb4v"/><path clip-rule="evenodd" class="g7z41b4ky"/>`,
		"fallback": "qlementine-icons:eye-24",
	});
}

export default Component;
