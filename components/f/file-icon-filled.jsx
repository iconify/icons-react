import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s03svacbz.css';
import '../../css/j/jwf99rbtz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s03svacbz"/><path class="jwf99rbtz"/>`,
		"fallback": "tdesign:file-icon-filled",
	});
}

export default Component;
