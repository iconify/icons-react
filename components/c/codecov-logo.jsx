import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ka2syl1pk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ka2syl1pk"/>`,
		"fallback": "streamline-logos:codecov-logo",
	});
}

export default Component;
