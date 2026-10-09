import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f6b3i8cls.css';
import '../../css/k/kjgxnq1ru.css';
import '../../css/d/d1u5dmb3x.css';
import '../../css/o/oduy0uyli.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f6b3i8cls"/><path class="kjgxnq1ru"/><path class="d1u5dmb3x"/><path class="oduy0uyli"/>`,
		"fallback": "energy-icons:battery-plus-20",
	});
}

export default Component;
