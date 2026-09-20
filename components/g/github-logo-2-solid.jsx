import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z6s395bcg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z6s395bcg"/>`,
		"fallback": "streamline-logos:github-logo-2-solid",
	});
}

export default Component;
