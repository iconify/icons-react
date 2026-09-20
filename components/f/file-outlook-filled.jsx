import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t3i4310qw.css';
import '../../css/k/kd0bdubwg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t3i4310qw"/><path class="kd0bdubwg"/>`,
		"fallback": "tdesign:file-outlook-filled",
	});
}

export default Component;
