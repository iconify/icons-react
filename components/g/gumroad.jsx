import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gy-mau2gx.css';
import '../../css/h/huruoib_p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b gy-mau2gx"/><path class="b huruoib_p"/>`,
		"fallback": "bxl:gumroad",
	});
}

export default Component;
