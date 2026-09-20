import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k49ygp-hn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="k49ygp-hn"/>`,
		"fallback": "streamline-sharp:cut-solid",
	});
}

export default Component;
