import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jas9_-b0f.css';
import '../../css/h/hf3ru2_zl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="duoicon-secondary-layer jas9_-b0f"/><path class="duoicon-primary-layer hf3ru2_zl"/>`,
		"fallback": "duo-icons:alert-triangle",
	});
}

export default Component;
