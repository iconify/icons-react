import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b8lu4ibzi.css';
import '../../css/a/asyh4bbyc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b8lu4ibzi"/><path class="asyh4bbyc"/>`,
		"fallback": "streamline-ultimate:cloud-add-bold",
	});
}

export default Component;
