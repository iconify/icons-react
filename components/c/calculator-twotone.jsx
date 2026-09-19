import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gc8-4tb2b.css';
import '../../css/z/z9c104box.css';
import '../../css/y/yyn-_s14g.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gc8-4tb2b"/><path class="z9c104box"/><path class="yyn-_s14g"/>`,
		"fallback": "ant-design:calculator-twotone",
	});
}

export default Component;
