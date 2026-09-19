import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/np8ilvg5i.css';
import '../../css/s/s9zx-k-iw.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="np8ilvg5i"/><path class="s9zx-k-iw"/>`,
		"fallback": "ant-design:gift-twotone",
	});
}

export default Component;
