import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jggrpmhpm.css';
import '../../css/a/avwmicc9i.css';
import '../../css/q/q8zv7fb-u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jggrpmhpm"/><path class="avwmicc9i"/><path class="q8zv7fb-u"/>`,
		"fallback": "thesvg-color:302dotai",
	});
}

export default Component;
