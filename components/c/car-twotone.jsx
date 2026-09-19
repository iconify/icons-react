import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/esgkqxb0k.css';
import '../../css/a/a6gnopb9u.css';
import '../../css/k/kxjzoigpa.css';
import '../../css/v/v3ufwzb3s.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="esgkqxb0k"/><path class="a6gnopb9u"/><path class="kxjzoigpa"/><path class="v3ufwzb3s"/>`,
		"fallback": "ant-design:car-twotone",
	});
}

export default Component;
