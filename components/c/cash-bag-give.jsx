import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z6tjmo3jk.css';
import '../../css/o/o5z4gyb2q.css';
import '../../css/p/pi74wdbap.css';
import '../../css/g/gbqyzbcew.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="z6tjmo3jk"><path class="o5z4gyb2q"/><path class="pi74wdbap"/><path class="gbqyzbcew"/></g>`,
		"fallback": "streamline-cyber:cash-bag-give",
	});
}

export default Component;
