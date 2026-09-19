import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o6o8szbwv.css';

const viewBox = {"width":1536,"height":1792};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o6o8szbwv"/>`,
		"fallback": "fa:file-archive-o",
	});
}

export default Component;
