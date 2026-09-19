import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9bscjvji.css';
import '../../css/y/ytxdcn94k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y9bscjvji"/><path class="ytxdcn94k"/>`,
		"fallback": "boxicons:image-alt",
	});
}

export default Component;
