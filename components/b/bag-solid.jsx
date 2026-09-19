import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zi0qeri7g.css';
import '../../css/a/a_bjixb7p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="zi0qeri7g"/><path class="a_bjixb7p"/>`,
		"fallback": "basil:bag-solid",
	});
}

export default Component;
