import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z7m3rdb3k.css';
import '../../css/s/s9upufoui.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z7m3rdb3k"/><path class="s9upufoui"/>`,
		"fallback": "energy-icons:burger-20-bold",
	});
}

export default Component;
