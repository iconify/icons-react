import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/acmwlabsp.css';
import '../../css/h/hzlua-bel.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="acmwlabsp"/><path class="hzlua-bel"/>`,
		"fallback": "streamline-pixel:email-mail-chat",
	});
}

export default Component;
