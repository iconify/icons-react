import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bramihlnm.css';
import '../../css/w/wpxuws29w.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bramihlnm"/><path class="wpxuws29w"/>`,
		"fallback": "ant-design:edit-twotone",
	});
}

export default Component;
