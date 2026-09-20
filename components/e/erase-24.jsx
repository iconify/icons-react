import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zp4vkvb7i.css';
import '../../css/q/quusr8xpo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zp4vkvb7i"/><path clip-rule="evenodd" class="quusr8xpo"/>`,
		"fallback": "qlementine-icons:erase-24",
	});
}

export default Component;
