import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ob1rhjbqc.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ob1rhjbqc"/>`,
		"fallback": "icon-park-outline:delete-key",
	});
}

export default Component;
