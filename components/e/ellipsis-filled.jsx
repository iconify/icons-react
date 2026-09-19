import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/by5xilmjq.css';
import '../../css/t/t6wz8cb3t.css';
import '../../css/a/aozro6bou.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="by5xilmjq"/><circle class="t6wz8cb3t"/><circle class="aozro6bou"/>`,
		"fallback": "bitcoin-icons:ellipsis-filled",
	});
}

export default Component;
