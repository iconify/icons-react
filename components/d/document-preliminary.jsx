import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pkb1tcc5d.css';
import '../../css/k/k2n9vabow.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pkb1tcc5d"/><path class="k2n9vabow"/>`,
		"fallback": "carbon:document-preliminary",
	});
}

export default Component;
