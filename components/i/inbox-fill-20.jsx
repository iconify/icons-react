import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vn3tamb9f.css';
import '../../css/a/a9b7zrdqe.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vn3tamb9f"/><path class="a9b7zrdqe"/>`,
		"fallback": "garden:inbox-fill-20",
	});
}

export default Component;
