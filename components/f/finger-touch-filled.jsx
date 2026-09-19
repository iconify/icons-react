import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/plnf21w4w.css';
import '../../css/f/fowt9fbln.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="plnf21w4w"/><path class="fowt9fbln"/>`,
		"fallback": "boxicons:finger-touch-filled",
	});
}

export default Component;
