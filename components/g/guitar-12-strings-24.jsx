import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tzqwesb-r.css';
import '../../css/z/zfqaiv0hs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tzqwesb-r"/><path class="zfqaiv0hs"/>`,
		"fallback": "qlementine-icons:guitar-12-strings-24",
	});
}

export default Component;
