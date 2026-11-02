import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zz18w6tjv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zz18w6tjv"/>`,
		"fallback": "mingcute:burj-al-arab-line",
	});
}

export default Component;
