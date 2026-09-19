import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/og1xdifdz.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="og1xdifdz"/>`,
		"fallback": "fluent-mdl2:contact-card-settings-mirrored",
	});
}

export default Component;
