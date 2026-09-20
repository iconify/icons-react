import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jtat2y9dp.css';
import '../../css/f/f29qyf3ac.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="jtat2y9dp"/><path class="f29qyf3ac"/>`,
		"fallback": "material-icon-theme:circleci-light",
	});
}

export default Component;
