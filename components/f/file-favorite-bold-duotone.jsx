import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oj6gwrmjs.css';
import '../../css/z/zjd2goozj.css';
import '../../css/a/a79031brt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="oj6gwrmjs"/><path class="zjd2goozj"/><path class="a79031brt"/>`,
		"fallback": "solar:file-favorite-bold-duotone",
	});
}

export default Component;
